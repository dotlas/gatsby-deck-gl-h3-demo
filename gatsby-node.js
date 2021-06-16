exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // Module resolutions
    resolve: {
      alias: {
        "~": `${__dirname}/src`,
      },
    },
  })
}
