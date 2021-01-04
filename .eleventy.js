// plugins
const rssPlugin = require("@11ty/eleventy-plugin-rss");

// transforms
const htmlMinTransform = require("./src/transforms/html-min-transform.js");

const isProduction = process.env.NODE_ENV === "production";

module.exports = (config) => {
  // minify HTML if in production
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinTransform);
  }

  // Returns a collection of blog posts in reverse date order
  config.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/posts/*.md")].reverse();
  });

  // Plugins
  config.addPlugin(rssPlugin);

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
