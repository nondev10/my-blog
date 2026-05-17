import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	// Use Astro's default loader so entries are processed by the markdown pipeline
	// and expose `entry.render()` (needed for remark plugins to run).
	schema: z.object({
		title: z.string(),
		published: z.date().or(z.string()),
		tags: z.array(z.string()).optional(),
	}),
});

const spec = defineCollection({
	// Let Astro handle loading for spec collection as well
});

// 重要：不要定义其他集合，让 Astro 知道只有 posts, spec
export const collections = { posts, spec };
