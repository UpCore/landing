import { graphql, useStaticQuery } from "gatsby"

type SiteMetaDataResponse = {
  companyName: string
  menuLinks: {
    name: string
    path: string
  }[]
}

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