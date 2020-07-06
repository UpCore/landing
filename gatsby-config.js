/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    companyName: `UpCore`,
    menuLinks: [
      {
        name: "O nas",
        path: "/about",
      },
      {
        name: "Główna",
        path: "/",
      },
      {
        name: "Kontakt",
        path: "/contact",
      },
    ]
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Krona One",
          "Roboto Condensed\:300,400,700",
        ],
        display: "swap",
      },
    },
  ],
}
