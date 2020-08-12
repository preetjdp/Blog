const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
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

exports.onCreateNode = ({ node, actions, getNode }) => {
  //   const { createNodeField } = actions

  //   if (node.internal.type === `MarkdownRemark`) {
  //     const value = createFilePath({ node, getNode })
  //     createNodeField({
  //       name: `slug`,
  //       node,
  //       value,
  //     })
  //   }
  // }

  // exports.createSchemaCustomization = ({ actions }) => {
  //   const { createFieldExtension, createTypes } = actions
  //   createFieldExtension({
  //     name: 'md',
  //     extend(options, prevFieldConfig) {
  //       return {
  //         type: 'String',
  //         resolve(source, args, context, info) {
  //           // const fieldValue = context.defaultFieldResolver(
  //           //   source,
  //           //   args,
  //           //   context,
  //           //   info
  //           // )
  //           return 'Maybe tomorrow.'
  //         },
  //       }
  //     },
  //   })
  //   createTypes(`
  //     type BlogPost implements Node {
  //       content: String @md
  //     }
  //   `)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Github_Issue: {
      customHTML: {
        type: "String",
        resolve(source, args, context, info) {
          // console.log(source, args, context, info)
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