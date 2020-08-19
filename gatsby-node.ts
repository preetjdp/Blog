// const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)
import path from "path"
import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode, CreateResolversArgs, CreatePagesArgs } from "gatsby"
import remark from "remark"
import remarkHtml from "remark-html"
import remarkHeadings from "remark-autolink-headings"
import remarkSlug from "remark-slug"
import remarkParse from "remark-parse"
import remark2rehype from "remark-rehype"
import rehypeHtml from "rehype-stringify"
import rehypePrism from "rehype-prism"

type resultReturnType = {
  github: any
  allMarkdownRemark: GatsbyTypes.MarkdownRemarkConnection
}

export const createPages = async ({ graphql, actions }: CreatePagesArgs) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const staticBlogPost = path.resolve(`./src/templates/static-post.tsx`)
  const result = await graphql<resultReturnType>(
    `
    {
      github {
        viewer {
          repository(name: "Blog") {
            issues(first: 20, labels: ["Blog"]) {
              nodes {
                number
              }
            }
          }
        }
      }
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
        edges {
          node {
            fields {
              slug
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

  if (result.data == undefined) return

  const { github, allMarkdownRemark } = result.data

  const ghPosts = github.viewer.repository!.issues.nodes
  const staticPosts = allMarkdownRemark.edges;

  ghPosts!.forEach((post, _: number) => {
    createPage({
      path: post!.number.toString(),
      component: blogPost,
      context: {
        slug: post!.number
      },
    })
  })

  staticPosts.forEach((post, _: number) => {
    createPage({
      path: post!.node!.fields!.slug!,
      component: staticBlogPost,
      context: {
        slug: post!.node!.fields!.slug!
      },
    })
  })
}

export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    }, { name: 'default-site-plugin' })
  }
}

export const createResolvers: GatsbyNode['createResolvers'] = async ({ createResolvers }: CreateResolversArgs) => {
  const resolvers = {
    Github_Issue: {
      customHTML: {
        type: "String",
        async resolve(source) {
          let markdown = source.body
          let processor = remark()
            .use(remarkParse)
            .use(remark2rehype)
            .use(rehypePrism)
            .use(rehypeHtml)

          let processed = await processor.process(markdown)
          return processed.contents
        },
      },
    },
  }
  createResolvers(resolvers, { name: 'default-site-plugin' })
}