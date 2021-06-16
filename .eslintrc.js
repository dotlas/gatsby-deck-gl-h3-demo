/**
 * ESLint configuration.
 *
 * References:
 *
 * - [Documentation](https://eslint.org/docs/user-guide/configuring/)
 * - [Gatsby guide](https://www.gatsbyjs.com/docs/how-to/custom-configuration/eslint/)
 */

module.exports = {
  extends: require.resolve("gatsby-plugin-eslint-config"),

  settings: {
    "import/resolver": {
      alias: {
        map: [["~", `${__dirname}/src`]],
      },
    },
  },

  rules: {
    // Imports
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          ["sibling", "index"],
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],

    // Base
    "no-console": "warn",
    quotes: ["warn", "double"],
    "sort-imports": ["warn", { ignoreDeclarationSort: true }],
  },
}
