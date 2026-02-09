/* 
From https://github.com/afoim/fuwari/tree/main/public/js/umami-share.js
Author 二叉树树 / afoim / Acofork (Website 2x.nz, acofork.com)
*/

((global) => {
	const cacheKey = "umami-share-cache";
	const cacheTTL = 3600_000; // 1h

	async function fetchShareData(baseUrl, shareId) {
		const cached = localStorage.getItem(cacheKey);
		if (cached) {
			try {
				const parsed = JSON.parse(cached);
				if (Date.now() - parsed.timestamp < cacheTTL) {
					return parsed.value;
				}
			} catch {
				localStorage.removeItem(cacheKey);
			}
		}
		const res = await fetch(`${baseUrl}/api/share/${shareId}`);
		if (!res.ok) {
			throw new Error("获取 Umami 分享信息失败");
		}
		const data = await res.json();
		localStorage.setItem(
			cacheKey,
			JSON.stringify({ timestamp: Date.now(), value: data }),
		);
		return data;
	}

	/**
	 * 获取 Umami 分享数据（websiteId、token）
	 * 在缓存 TTL 内复用；并用全局 Promise 避免并发请求
	 * @param {string} baseUrl
	 * @param {string} shareId
	 * @returns {Promise<{websiteId: string, token: string}>}
	 */
	global.getUmamiShareData = (baseUrl, shareId) => {
		if (!global.__umamiSharePromise) {
			global.__umamiSharePromise = fetchShareData(baseUrl, shareId).catch(
				(err) => {
					delete global.__umamiSharePromise;
					throw err;
				},
			);
		}
		return global.__umamiSharePromise;
	};

	global.clearUmamiShareCache = () => {
		localStorage.removeItem(cacheKey);
		delete global.__umamiSharePromise;
	};

	// 初始化全局缓存 Map
	if (!global.__umamiDataCache) {
		global.__umamiDataCache = new Map();
	}

	/**
	 * 获取 Umami 统计数据
	 * 自动处理 token 获取和过期重试
	 * @param {string} baseUrl
	 * @param {string} shareId
	 * @param {object} queryParams
	 * @returns {Promise<any>}
	 */
	global.fetchUmamiStats = async (baseUrl, shareId, queryParams) => {
		// 生成缓存键：baseUrl + shareId + queryParams的字符串表示
		const cacheKey = `${baseUrl}|${shareId}|${JSON.stringify(queryParams)}`;
		
		// 检查全局内存缓存
		if (global.__umamiDataCache.has(cacheKey)) {
            const data = global.__umamiDataCache.get(cacheKey);
            // 标记数据来自缓存
            return { ...data, _fromCache: true };
		}

		async function doFetch(isRetry = false) {
			const { websiteId, token } = await global.getUmamiShareData(
				baseUrl,
				shareId,
			);
			const currentTimestamp = Date.now();
			const params = new URLSearchParams({
				startAt: 0,
				endAt: currentTimestamp,
				unit: "hour",
				timezone: queryParams.timezone || "Asia/Shanghai",
				compare: false,
				...queryParams,
			});

			// First try a shared stats endpoint that some Umami deployments expose
			// which does not require sending a custom header (avoids preflight/CORS issues):
			//   GET {baseUrl}/api/share/{shareId}/stats?...
			// If that fails, fall back to the token-authenticated websites stats endpoint.
			const shareStatsUrl = `${baseUrl.replace(/\/$/, '')}/api/share/${shareId}/stats?${params.toString()}`;
			try {
				const shareRes = await fetch(shareStatsUrl);
				if (shareRes.ok) {
					const shareData = await shareRes.json();
					global.__umamiDataCache.set(cacheKey, shareData);
					return shareData;
				}
			} catch (e) {
				// ignore and fall through to token-authenticated fetch
			}

			// Build stats URL for token-authenticated endpoint.
			// Try the documented `/api/websites/.../stats` first.
			const statsApiUrl = `${baseUrl.replace(/\/$/, '')}/api/websites/${websiteId}/stats?${params.toString()}`;

			let res = await fetch(statsApiUrl, {
				headers: {
					"x-umami-share-token": token,
				},
			});

			// If we get a 401, token may be expired -> clear cache and retry once
			if (!res.ok && res.status === 401 && !isRetry) {
				global.clearUmamiShareCache();
				return doFetch(true);
			}

			// If server returns 400 (bad request), it often means the `path` param
			// does not match any expected format. Try some common path variants
			// (with/without trailing slash, with/without `eq.` prefix) before failing.
			if (!res.ok && res.status === 400) {
				try {
					const originalPath = queryParams.path;
					if (originalPath) {
						const variants = [];
						// original
						variants.push(originalPath);
						// without trailing slash
						if (originalPath.endsWith('/')) variants.push(originalPath.replace(/\/$/, ''));
						// with trailing slash
						if (!originalPath.endsWith('/')) variants.push(`${originalPath}/`);
						// without eq. prefix
						if (originalPath.startsWith('eq.')) variants.push(originalPath.replace(/^eq\./, ''));
						// with eq. prefix
						if (!originalPath.startsWith('eq.')) variants.push(`eq.${originalPath}`);

						// Deduplicate
						const tried = new Set();
						for (const p of variants) {
							const candidate = p;
							if (tried.has(candidate)) continue;
							tried.add(candidate);
							const paramsObj = { ...queryParams, path: candidate };
							const paramsTry = new URLSearchParams({
								startAt: params.get('startAt') || 0,
								endAt: params.get('endAt') || Date.now(),
								unit: params.get('unit') || 'hour',
								timezone: params.get('timezone') || queryParams.timezone || 'Asia/Shanghai',
								compare: params.get('compare') || false,
								...paramsObj,
							});
							const tryUrl = `${baseUrl.replace(/\/$/, '')}/api/websites/${websiteId}/stats?${paramsTry.toString()}`;
							const tryRes = await fetch(tryUrl, {
								headers: { 'x-umami-share-token': token },
							});
							if (tryRes.ok) {
								const altData = await tryRes.json();
								global.__umamiDataCache.set(cacheKey, altData);
								return altData;
							}
						}
					}
				} catch (e) {
					// ignore and fall through to generic error
				}
			}

			if (!res.ok) {
				throw new Error("获取统计数据失败");
			}

			const data = await res.json();
			// 写入全局缓存
			global.__umamiDataCache.set(cacheKey, data);
			return data;
		}

		return doFetch();
	};
})(window);
