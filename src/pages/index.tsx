import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { formatCreatedDate } from "../utils/helpers"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  console.log(data)
  // const posts = data.allMarkdownRemark.edges
  const posts = data.github.viewer.repository.issues.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {/* <aside> */}
      <Bio />
      {/* </aside> */}
      {/* <main> */}
      {posts.map((node) => {
        console.log(node)
        const title = node.title
        return (
          <article key={node.id}>
            <header>
              <h3
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: rhythm(1),
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.id} rel="bookmark">
                  {title}
                </Link>
              </h3>
              <small>
                {formatCreatedDate(node.createdAt)}
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
