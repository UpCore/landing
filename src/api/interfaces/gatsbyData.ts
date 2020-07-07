export type GatsbyDataInterface = {
  data: {
    site: {
      siteMetadata: SiteMetaDataResponse
    }
  }
}

export type SiteMetaDataResponse = {
  companyName: string
  menuLinks: {
    name: string
    path: string
  }[]
}