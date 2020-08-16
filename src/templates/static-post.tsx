import React from "react"
import { graphql, PageProps, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Post, mapNodeToPost, mapStaticNodeToPost } from "../utils/mapPost"

const StaticPostTemplate = ({ data, location }: PageProps) => {
    const post: Post = mapStaticNodeToPost(data.markdownRemark)
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
                <section dangerouslySetInnerHTML={{ __html: post.customHTML }} />
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

export default StaticPostTemplate

export const pageQuery = graphql`
  query StaticBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
        id
        html
        timeToRead
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
      }
  }
`
