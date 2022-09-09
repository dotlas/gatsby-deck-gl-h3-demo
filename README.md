# gatsby-deck-gl-h3-demo

A [Gatsby](https://github.com/gatsbyjs/gatsby) site that demonstrates [`deck.gl`](https://github.com/visgl/deck.gl) and [uber's `H3`](https://h3geo.org/).

## Usage

- Install dependencies:

  ```bash
  yarn
  ```

- Configure an environment variable, `MAPBOX_ACCESS_TOKEN`, for a [mapbox access token](https://docs.mapbox.com/help/glossary/access-token/).
  Separate `.env` files must be provided for `development` and `production` (refer to this [guide](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/)).

- Build and serve the [site](https://localhost:9000):

  ```bash
  npm run build && npm run serve
  ```
