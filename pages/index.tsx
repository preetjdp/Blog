import React from "react";

import Head from "next/head";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import Main from "@/components/Main";
import Article from "@/components/Article";
import Footer from "@/components/Footer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getAllPosts } from "@/utils/api";
import { InternalPost } from "@/utils/types";
import { generateRSS } from "@/utils/rss";

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <title>Preet Parekh | Blog</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content="Personal blog by Preet" />
        <meta property="og:title" content="preetjdp.dev" />
        <meta
          property="og:image"
          content="https://github.com/preetjdp/Blog/blob/b8b1afda6a86a90e60a6b4f31289872eb9e435a8/public/assets/og_image.png?raw=true"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Preet Parekh | Blog" />
        <meta property="og:description" content="Personal blog by Preet" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TmPreet" />
        <meta name="twitter:title" content="preetjdp.dev" />
        <meta
          name="twitter:description"
          content="Personal blog by Preet Parekh"
        />
        <meta
          name="twitter:image"
          content="https://github.com/preetjdp/Blog/blob/b8b1afda6a86a90e60a6b4f31289872eb9e435a8/public/assets/og_image.png?raw=true"
        />
      </Head>
      <Container>
        <Header />
        <Aside />
        <Main>
          {props.posts.map((post) => (
            <Article key={post.slug} {...post.frontMatter} />
          ))}
        </Main>
        <Footer />
      </Container>
    </>
  );
}

interface Props {
  posts: Array<InternalPost>;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  await generateRSS();

  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};
