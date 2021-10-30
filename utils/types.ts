import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface InternalPostMeta {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  ogImage: string;
}

export interface InternalPost {
  slug: string;
  mdxSource: MDXRemoteSerializeResult<InternalPostMeta>;
  tweetIDs: Array<string>;
  frontMatter: InternalPostMeta;
}
