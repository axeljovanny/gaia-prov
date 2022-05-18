module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/home`,
        background_color: `#F4F2EF`,
        theme_color: `#F4F2EF`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    // gatsby-config.js
    // ...
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '1J1mOfNo2aM6GeUlZaw0bJwVnG3bkRGKAi_xFslILvWY',
        worksheetTitle: 'Services',
        credentials: require('./secret.json'),
        filterNode: () => true,
        mapNode: node => node
      }
    },
  ],
}
