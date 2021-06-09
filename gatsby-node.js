// `kepler.gl` requires the `assert` module in browser
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: { assert: require.resolve("assert/") },
    },
  })
}
