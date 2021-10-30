import fs from "fs/promises";
import { join } from "path";
import RSS from "rss";
import matter from "gray-matter";

const postDirectory = join(process.cwd(), "_posts");

async function getPostSlugs() {
  return await fs.readdir(postDirectory);
}

async function generate() {
  const feed = new RSS({
    title: "Preet Parekh ",
    site_url: "https://preetjdp.dev",
    feed_url: "https://preetjdp.dev/feed.xml",
  });

  const slugs = await getPostSlugs();

  await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = join(postDirectory, slug);
      const fileContents = await fs.readFile(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      feed.item({
        title: data.title,
        url: "https://aljoseph.co/posts/" + slug.replace(/\.mdx?/, ""),
        date: data.date,
        description: data.excerpt,
      });
    })
  );

  return await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}

generate();
