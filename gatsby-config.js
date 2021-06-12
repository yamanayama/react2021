/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "naomu",
    author: "murakami naomi",
    category: ["UI", "CSS-in-JS", "React"],
    user: { name: "me", email: "me@example.com" },
  },

  plugins: [
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
  ],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@linaria"
  ],
}
