# kitch-maps

A [deck.gl](https://github.com/visgl/deck.gl) powered [Gatsby](https://github.com/gatsbyjs/gatsby) site for cloud kitchen operations.

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

## Tasks

- [ ] Add `eslint` configuration.
