import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50,quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
          blurHash(height: 50,width: 50,componentX: 3,componentY:3) {
            base64Image
          }
        }
      }
      site {
        siteMetadata {
          author
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, description, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
      }}
    >
      <Image
        fixed={{
          ...data.avatar.childImageSharp.fixed,
          base64: data.avatar.childImageSharp.blurHash.base64Image
        }}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p style={{ maxWidth: 310 }}>
        {description} by{' '}
        <a href="https://mobile.twitter.com/dan_abramov">{author}</a>.{' '}
        I&nbsp;explain with words and code.
      </p>
    </div>
  )
}

export default Bio
