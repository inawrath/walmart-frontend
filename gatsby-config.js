module.exports = {
  siteMetadata: {
    title: `Walmart Test`,
    description: `Walmart Test`,
    author: `inawrath`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`400`, `500`, `600`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `500`, `600`],
          },
        ],
      },
    },
  ],
}
