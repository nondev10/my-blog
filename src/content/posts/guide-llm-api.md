---
title: 2026 年免费大模型 API 踩坑指南
published: 2026-07-01
description: 免费模型那么多，怎样使用是关键。
image: ""
tags:
  - 人工智能
  - 大语言模型
  - API
category: 记录
draft: false
lang: ""
---

（引文摘要均自互联网，不保证准确）

## 豪用

### 智谱 AI（GLM）  

> 免费模型：glm-4-flash、glm-4.7-flash（永久免费）  
> 上下文：128K / 200K；并发：1–5  
> 新用户：2000 万 Token 永久额度  
> 适合：中文、长文本、编程、日常调用  

调用简单，只需 APIKey 即可调用，**无需实名认证**。  
获取 API Key：[智谱AI开放平台](https://bigmodel.cn/apikey/platform)
调用文档：[GLM-4.7-Flash - 智谱AI开放文档](https://docs.bigmodel.cn/cn/guide/models/free/glm-4.7-flash#curl)

## 不豪用

## 讯飞星火模型集市

有几个限时免费的模型，比如 ：Hy-MT2-7B、Qwen3.5-2B 等，需要创建“应用”。
链接：[讯飞星辰MaaS平台-官网](https://maas.xfyun.cn/modelSquare)

### 腾讯云混元（hunyuan-lite）  

> 免费模型：hunyuan-lite（长期免费）  
> 限制：并发≈5，不限总量  
> 适合：闲聊、轻量生成、中文场景  

**需要实名认证**，未成年散了吧。

### 百度千帆（ERNIE-Speed）  

> 免费模型：ERNIE-Speed-128K / 8K  
> 限制：RPM 60，TPM 300,000  
> 适合：高速短文本、问答、内容摘要  

**需要实名认证**，调用还忒复杂，未成年、懒人都散了吧。

### 硅基流动 SiliconFlow（聚合平台）  

> 免费模型：Qwen2.5、DeepSeek 等部分开源模型免费  
> 新用户：14 元配额（≈1 亿 Token）  
> 适合：多模型对比、开源模型快速调用  

“检测到该手机号可能存在异常，暂无法注册，请更换其它号码”
