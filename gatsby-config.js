module.exports = {
  siteMetadata: {
    title: "The localhost blog",
    description: "This is my coding blog",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
  ],
};
