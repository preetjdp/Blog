// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
import path from "path"
import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode, CreateResolversArgs } from "gatsby"
import remark from "remark"
import remarkHtml from "remark-html"
import remarkHeadings from "remark-autolink-headings"
import remarkSlug from "remark-slug"
import remarkParse from "remark-parse"

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(
    `
      {
        github {
          viewer {
            repository(name: "Blog") {
              issues(first: 20, labels: ["Blog"]) {
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
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  // const posts = result.data.allMarkdownRemark.edges
  const posts = result.data.github.viewer.repository.issues.nodes

  posts.forEach((post, index) => {
    createPage({
      path: post.number.toString(),
      component: blogPost,
      context: {
        slug: post.number
      },
    })
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

export const createResolvers: GatsbyNode['createResolvers'] = async ({ createResolvers }: CreateResolversArgs) => {
  const resolvers = {
    Github_Issue: {
      customHTML: {
        type: "String",
        async resolve(source) {
          // console.log(source)
          let markdown = source.body
          let processor = remark()
            .use(remarkParse)
            .use(remarkSlug)
            .use(remarkHeadings, {
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
            })
            .use(remarkHtml)

          let processed = await processor.process(markdown)
          return processed.contents
          // return context.nodeModel.getNodeById({
          //   id: source.author,
          //   type: "AuthorJson",
          // })
        },
      },
    },
  }
  createResolvers(resolvers)
}


// export const createResolvers: GatsbyNode['createResolvers'] = async (args: CreateResolversArgs) => {
// }