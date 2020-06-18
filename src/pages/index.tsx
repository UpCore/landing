import React from "react"
import { graphql } from "gatsby"

import { GatsbyDataInterface } from "../api/interfaces/gatsbyData"

import { Layout } from "../components/layout"
import { HomeHero } from "../components/homeHero/homeHero"

export const HomePage: React.FC<GatsbyDataInterface> = ({ data }) => (
  <Layout>
    <HomeHero {...data.site.siteMetadata} />
  </Layout>
)


export const query = graphql`
    query {
        site {
            siteMetadata {
                companyName
            }
        }
    }
`

export default HomePage