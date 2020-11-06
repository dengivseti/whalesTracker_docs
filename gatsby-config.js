module.exports = {
  siteMetadata: {
    siteTitle: 'Whale`s tracker Docs',
    defaultTitle: 'Whale`s tracker Docs',
    siteTitleShort: 'Whale`s tracker Docs',
    siteDescription: 'Documentation for Whale`s tracker',
    siteUrl: `https://whalestracker.netlify.app/`,
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
        githubUrl: `https://github.com/dengivseti/whalesTracker_docs`,
        baseDir: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Whale`s tracker',
        short_name: 'Whale`s tds',
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
        siteUrl: `https://whalestracker.netlify.app/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
