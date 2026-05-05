import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({
		pattern: "*.md", // 注意：只有一个星号，不匹配子目录
		base: "src/content/posts", // 明确指定基础路径
	}),
	schema: z.object({
		title: z.string(),
		published: z.date().or(z.string()),
		tags: z.array(z.string()).optional(),
	}),
});

const spec = defineCollection({
	loader: glob({
		pattern: "*.md", // 注意：只有一个星号，不匹配子目录
		base: "src/content/spec", // 明确指定基础路径
	}),
	schema: z.object({
		title: z.string(),
		published: z.date().or(z.string()),
		tags: z.array(z.string()).optional(),
	}),
});

// 重要：不要定义其他集合，让 Astro 知道只有 posts, spec
export const collections = { posts, spec };
