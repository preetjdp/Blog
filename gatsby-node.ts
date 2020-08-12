// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
import path from "path"
import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode, CreateResolversArgs, SourceNodesArgs } from "gatsby"

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
        resolve(source) {
          // console.log(source)
          let markdown = source.body
          
          return "wowza"
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