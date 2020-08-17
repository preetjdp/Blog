export default {
  siteMetadata: {
    title: `Blog`,
    author: `Preet Parekh`,
    description: `Personal Blog`,
    siteUrl: `https://preet-blog.netlify.app/`,
    social: {
      twitter: `TmPreet`,
      mail: `preetjdpdev@gmail.com`
    },
    repoName: `Blog`
  },
  plugins: [
    `gatsby-plugin-typegen`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Preet Parekh Blog`,
        short_name: `Preet Parekh`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffa7c4`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        theme_color_in_head: false,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `@m5r/gatsby-transformer-blurhash`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Github`,
        fieldName: `github`,
        headers: {
          Authorization: `Bearer c8db5d8102477ad0a6604115e0c6b577b8556e4f`
        },
        url: `https://api.github.com/graphql`,
        // createSchema: async () => {
        //   const sdl = fs.readFileSync(`${__dirname}/schema.sdl`).toString()
        //   return buildSchema(sdl)
        // },
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
