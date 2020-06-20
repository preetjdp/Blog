import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { formatCreatedDate } from "../utils/helpers"
import { Post, mapNodeToPost } from "../utils/mapPost"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  console.log(data)
  // const posts = data.allMarkdownRemark.edges
  const posts: Array<Post> = data.github.viewer.repository.issues.nodes.map((e: any) => mapNodeToPost(e));

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* <aside> */}
      <Bio />
      {/* </aside> */}
      {/* <main> */}
      {posts.map((post) => {
        console.log(post.id)
        return (
          <article key={post.id}>
            <header>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: rhythm(1),
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={post.id} rel="bookmark">
                  {post.title}
                </Link>
              </h3>
              <small>
                {post.createAtPretty}
                {/* {` • ${formatReadingTime(node.timeToRead)}`} */}
              </small>
            </header>
            {/* <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.bodyHTML,
                }}
              />
            </section> */}
          </article>
        )
      })}
      {/* </main> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
    github {
      viewer {
        repository(name: "Blog") {
          issues(first: 20) {
            nodes {
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
  }
`
