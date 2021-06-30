module.exports = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  plugins: [
    // Linting
    {
      resolve: "eslint-plugin-gatsby",
      options: {
        extensions: ["js", "jsx", "ts", "tsx"],
        failOnError: false,
      },
    },

    // Optimization
    "gatsby-plugin-preact",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        analyzerMode: "static",
        reportFilename: `${__dirname}/.cache/report.html`,
        openAnalyzer: false,
      },
    },

    // Deployment
    {
      resolve: "gatsby-plugin-gatsby-cloud",
      options: {
        allPageHeaders: [
          "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
        ],
        headers: {
          "/*.html": ["Cache-Control: public, no-cache"],
          "/*page-data.json": ["Cache-Control: public, no-cache"],
          "/*app-data.json": ["Cache-Control: public, no-cache"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-env-variables",
      options: {
        allowList: ["MAPBOX_ACCESS_TOKEN"],
      },
    },
  ],
}
