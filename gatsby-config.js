module.exports = {
  siteMetadata: {
    siteTitle: 'While`s tracker Docs',
    defaultTitle: 'While`s tracker Docs',
    siteTitleShort: 'While`s tracker Docs',
    siteDescription: 'Documentation for Whale`s tracker',
    siteUrl: `https://whiletracker.netlify.app/`,
    siteAuthor: `@dengivseti`,
    siteImage: ``,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/dengivseti/while_tracker_docs`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'While`s tracker',
        short_name: 'While`s tds',
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://whiletracker.netlify.app/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
