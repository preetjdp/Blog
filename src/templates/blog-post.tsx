import React from "react"
import { graphql, PageProps } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Post, mapNodeToPost } from "../utils/mapPost"

const BlogPostTemplate = ({ data, location }: PageProps) => {
  const post: Post = mapNodeToPost(data.github.viewer.repository.issue)
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.title}
      // description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.createAtPretty}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.bodyHTML }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    github {
      viewer {
        repository(name: "Blog") {
          name
          issue(number: $slug) {
              id
                number
                title
                resourcePath
                createdAt  
                bodyHTML
            }
        }
      }
    }
  }
`
