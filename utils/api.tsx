import fs from "fs";
import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import mdxPrism from "mdx-prism";
import remarkSlug from "remark-slug";
import remarkAutolinkHeadings from "remark-autolink-headings";
import remarkCodeTitles from "remark-code-titles";

import MDXComponents from "@/components/MDXComponents";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { InternalPost, InternalPostMeta } from "./types.js";
import { githubClient } from "./graphql";
import { gql } from "graphql-request";
import {
  GetGithubIssuesQuery,
  GetGithubIssuesQueryVariables,
} from "./github-generated-types.js";

const postDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postDirectory);
}

/**
 * This function is used to fetch all the locally written MDX posts
 */
const getLocalMDXPosts = async (): Promise<Array<InternalPost>> => {
  const fileNames = fs.readdirSync(postDirectory, "utf8");

  const files = fileNames.map((f) =>
    fs.readFileSync(join(postDirectory, f), "utf8")
  );

  const result: Array<InternalPost> = [];

  for await (const fileContents of files) {
    const { data, content } = matter(fileContents);
    const mdxSource = (await serialize(content, {
      //@ts-expect-error Ignore
      components: MDXComponents,
      scope: data,
      mdxOptions: {
        remarkPlugins: [
          remarkSlug,
          [
            remarkAutolinkHeadings,
            {
              linkProperties: {
                className: ["anchor", "shadow-none"],
              },
            },
          ],
          remarkCodeTitles,
        ],
        rehypePlugins: [mdxPrism],
      },
    })) as unknown as MDXRemoteSerializeResult<InternalPostMeta>;

    const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
    const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);

    result.push({
      slug: data.slug,
      mdxSource,
      tweetIDs: tweetIDs || [],
      frontMatter: data as InternalPostMeta,
    });
  }

  return result;
};

const getGithubMDXPosts = async (): Promise<Array<InternalPost>> => {
  const QUERY = gql`
    query getGithubIssues {
      viewer {
        repository(name: "Blog") {
          issues(first: 20, labels: ["Blog"]) {
            nodes {
              body
            }
          }
        }
      }
    }
  `;

  const result: Array<InternalPost> = [];

  const data = await githubClient.request<
    GetGithubIssuesQuery,
    GetGithubIssuesQueryVariables
  >(QUERY);

  for await (const node of data.viewer.repository.issues.nodes) {
    const fileContents = node.body;
    const { data, content } = matter(fileContents);
    const mdxSource = (await serialize(content, {
      //@ts-expect-error Ignore
      components: MDXComponents,
      scope: data,
      mdxOptions: {
        remarkPlugins: [
          remarkSlug,
          [
            remarkAutolinkHeadings,
            {
              linkProperties: {
                className: ["anchor", "shadow-none"],
              },
            },
          ],
          remarkCodeTitles,
        ],
        rehypePlugins: [mdxPrism],
      },
    })) as unknown as MDXRemoteSerializeResult<InternalPostMeta>;

    const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
    const tweetIDs = tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]);

    result.push({
      slug: data.slug,
      mdxSource,
      tweetIDs: tweetIDs || [],
      frontMatter: data as InternalPostMeta,
    });
  }

  return result;
};

/**
 * Get all posts
 *
 * @returns Promise<Array<InternalPost>>
 */
const getAllPosts = async (): Promise<Array<InternalPost>> => {
  const localPosts = await getLocalMDXPosts();
  const githubPosts = await getGithubMDXPosts();

  return [
    // ...localPosts,
    ...githubPosts,
  ];
};

/**
 * Find a post using its slug
 *
 * @param slug The slug of the post
 * @returns Promise<InternalPost>
 */
export const getPostBySlug = async (slug: string) => {
  const posts = await getAllPosts();

  const post = posts.find((e) => e.slug === slug);

  return post;
};

/**
 * Get pagination data for a post
 *
 * @param pageSlug The slug of the page
 * @returns The data required for pagination
 */
export const getPagination = async (pageSlug: string) => {
  const posts = await getAllPosts();

  const slugs = posts.map(({ slug }) => slug);
  const postsTitle = posts.map(({ frontMatter: { title } }) => title);

  const totalPages = posts.length;
  const current = slugs.indexOf(pageSlug) + 1;

  let prev = undefined;
  let next = undefined;

  if (totalPages > 1) {
    if (current === 1) {
      next = 2;
      prev = undefined;
    }
    if (current > 1) {
      next = current + 1;
      prev = current - 1;
    }
    if (current === totalPages) {
      prev = totalPages - 1;
      next = undefined;
    }
  }
  return {
    prevPage: {
      url: slugs[prev - 1] || null,
      title: postsTitle[prev - 1] || null,
    },
    nextPage: {
      url: slugs[next - 1] || null,
      title: postsTitle[next - 1] || null,
    },
  };
};

export { getAllPosts };
