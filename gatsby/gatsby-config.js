require(`dotenv`).config({
  path: `.env`
});

const title = `Act Now - Save Lives`;

module.exports = {
  siteMetadata: {
    siteTitle: title,
    siteTitleAlt: title,
    siteHeadline: "Encouraging civic responsibility around covid-19",
    author: "GeneroUS Labs",
    siteUrl: "https://actnowsavelives.com",
    siteDescription: "Encouraging civic responsibility around covid-19",
    siteLanguage: "en",
    siteImage: "/banner.jpg",
    externalLinks: [],
    navigation: []
  },
  plugins: [
    "gatsby-plugin-typescript",
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [],
        externalLinks: []
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: title,
        short_name: `act-now-save-lives`,
        description: `Encouraging civic responsibility around covid-19`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-netlify`
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ]
};
