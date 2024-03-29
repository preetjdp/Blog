import React from "react";

import Head from "next/head";
import { MDXRemote } from "next-mdx-remote";
import { useRouter } from "next/router";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Main from "@/components/Main";
import BlogDate from "@/components/BlogDate";
import Pagination from "@/components/Pagination";
import Tweet from "@/components/Tweet";
import MDXComponents from "@/components/MDXComponents";

import { getPostBySlug, getPagination, getAllPosts } from "@/utils/api";
// import { getTweets } from '@/utils/twitter';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export default function Post({
  post,
  tweets,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const canonicalUrl = `https://preetjdp.dev${router.asPath}`;
  const GITHUB_USERNAME = "preetjdp";
  const GITHUB_REPO = "Blog";
  const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/${GITHUB_REPO}/edit/master/_posts/${post.frontMatter.slug}.mdx`;
  const TWITTER_URL = `https://twitter.com/search?q=${encodeURIComponent(
    canonicalUrl
  )}`;

  // const StaticTweet = ({ id }) => {
  // 	const tweet = tweets.find((tweet) => tweet.id === id);
  // 	return <Tweet {...tweet} />;
  // };

  return (
    <>
      <Head>
        <title>{post.frontMatter.title} - Al Joseph Condino</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="description" content={post.frontMatter.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={post.frontMatter.title} />
        <meta property="og:image" content={post.frontMatter.ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Al Joseph Condino" />
        <meta property="og:description" content={post.frontMatter.excerpt} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@condino_aj" />
        <meta name="twitter:title" content={post.frontMatter.title} />
        <meta name="twitter:description" content={post.frontMatter.excerpt} />
        <meta name="twitter:image" content={post.frontMatter.ogImage} />
      </Head>
      <Container>
        <Header />
        <Main>
          <header>
            <h1 className="mb-7 mt-10 sm:text-4xl text-3xl font-black font-sans">
              {post.frontMatter.title}
            </h1>
            <p className="leading-7 mb-7 -mt-6">
              <BlogDate date={post.frontMatter.date} minutes={2} />
            </p>
          </header>
          <article className="prose prose-lg dark:prose-dark w-full">
            <MDXRemote {...post.mdxSource} components={{ ...MDXComponents }} />
          </article>
          <footer className="mb-8 mt-6">
            <p className="text-base">
              <a
                className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discuss on Twitter
              </a>{" "}
              &bull;{" "}
              <a
                className="text-pink-700 dark:text-pink-300 shadow-link hover:shadow-none"
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit on Github
              </a>
            </p>
          </footer>
        </Main>
        <Aside />
        <Pagination pagination={pagination} />
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Record<string, string>;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  // const tweets = await getTweets(post.tweetIDs);
  const { prevPage, nextPage } = await getPagination(params.slug);

  return {
    props: {
      post,
      // tweets,
      pagination: {
        prevPage,
        nextPage,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.mdxSource.scope.slug,
        },
      };
    }),
    fallback: false,
  };
};
