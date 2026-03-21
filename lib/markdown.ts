import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const blogsDirectory = path.join(process.cwd(), "blogs");

export type PostData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
  github?: string;
  contentHtml: string;
};

export async function getPostBySlug(slug: string, lang: string): Promise<PostData> {
  const filePath = path.join(blogsDirectory, lang, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  const contentHtml = (await remark().use(html).process(content)).toString();

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    thumbnail: data.thumbnail,
    github: data.github,
    contentHtml,
  };
}

export function getAllSlugs(lang: string): string[] {
  const langDir = path.join(blogsDirectory, lang);
  if (!fs.existsSync(langDir)) return [];

  return fs.readdirSync(langDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}