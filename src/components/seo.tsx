/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type seoInput = {
  description: string
  meta: string
  title: string
}

const SEO = ({ description, meta, title }: seoInput) => {
  const { site, icon } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
        icon: file(relativePath: {eq: "icon.png"}) {
          absolutePath
          childImageSharp {
            fixed(height: 200,width: 200) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description


  return (
    <Helmet
      title={title}
      htmlAttributes={{
        lang: `en`
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: site.siteMetadata.siteUrl + icon.childImageSharp.fixed.src
        },
        {
          property: `og:image:height`,
          content: icon.childImageSharp.fixed.height
        },
        {
          property: `og:image:width`,
          content: icon.childImageSharp.fixed.width
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.social.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
