import { graphql, useStaticQuery } from "gatsby"

import { SiteMetaDataResponse } from "../api/interfaces/gatsbyData"

export const useSiteMetadata = (): SiteMetaDataResponse => {
  const { site } = useStaticQuery(
    graphql`
        query SiteMetaData {
            site {
                siteMetadata {
                    companyName
                    menuLinks {
                        name
                        path
                    }
                }
            }
        }
    `,
  )
  return site.siteMetadata
}