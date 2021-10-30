import fs from "fs/promises";
import { join } from "path";
import RSS from "rss";
import { getAllPosts } from "./api";

const postDirectory = join(process.cwd(), "_posts");

export async function generateRSS() {
  console.log("heere");
  const feed = new RSS({
    title: "Preet Parekh ",
    site_url: "https://preetjdp.dev",
    feed_url: "https://preetjdp.dev/feed.xml",
  });

  const posts = await getAllPosts();

  for await (const post of posts) {
    feed.item({
      title: post.frontMatter.title,
      url: "https://preetjdp.dev/" + post.slug,
      date: post.frontMatter.date,
      description: post.frontMatter.excerpt,
    });
  }

  return await fs.writeFile("./public/feed.xml", feed.xml({ indent: true }));
}
