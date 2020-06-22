import React from "react"
import { graphql } from "gatsby"

import { GatsbyDataInterface } from "../api/interfaces/gatsbyData"

import { Layout } from "../components/layout"
import { HomeHero } from "../components/homeHero/homeHero"

const HomePage: React.FC<GatsbyDataInterface> = ({ data }) => (
  <Layout>
    <HomeHero {...data.site.siteMetadata} />
  </Layout>
)

// Old fashion page query. Can be changed to Static Query.
// Ref: https://www.gatsbyjs.org/docs/static-query/#how-staticquery-differs-from-page-query
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