import React from "react";

import Link from "next/link";
import BlogDate from "./BlogDate";

/**
 *
 * @todo Fix readingTime
 */
const Article = ({ title, date, excerpt, slug, readingTime = 2 }) => {
  return (
    <article>
      <header>
        <h2 className="text-xxl mt-10 mb-2 font-black font-sans">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="text-pink-600 dark:text-pink-300 ">{title}</a>
          </Link>
        </h2>
        <BlogDate date={date} minutes={readingTime} />
      </header>
      <p className="mb-7 text-base">{excerpt}</p>
    </article>
  );
};

export default Article;
