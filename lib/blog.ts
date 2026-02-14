import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    featured: boolean;
    author: string;
    contentHtml: string;
}

export async function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = await Promise.all(fileNames.map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title || "Untitled",
            date: data.date || "2026-01-01",
            featured: !!data.featured,
            author: data.author || "Orama",
        };
    }));

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return {
        slug,
        contentHtml,
        title: data.title || "Untitled",
        date: data.date || "2026-01-01",
        featured: !!data.featured,
        author: data.author || "Orama",
    };
}
