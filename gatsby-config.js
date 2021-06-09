/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  plugins: [
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: `${__dirname}/.cache/report.html`,
        openAnalyzer: false,
      },
    },
  ],
}
