/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  // Copy assets to output (Eleventy 3.x recommended patterns)
  eleventyConfig.addPassthroughCopy({
    "src/styles": "styles",
    "src/images": "images",
  });

  // Add a filter for formatting dates (Eleventy 3.x pattern)
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  });

  // Performance optimizations for Eleventy 3.x
  eleventyConfig.setServerOptions({
    domdiff: false, // Disable DOM diffing for better performance
    port: 8081,
    showAllHosts: true,
    // Enable HTTP/2 for better dev performance
    enabled: true,
  });

  // Eleventy 3.x: Optimize builds
  eleventyConfig.setQuietMode(true);

  return {
    // Input directory configuration
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    // Template formats (explicit for Eleventy 3.x clarity)
    templateFormats: ["njk", "md", "html", "js"],
    // Use Nunjucks for all processing (Eleventy 3.x best practice)
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    // Enable data deep merge (Eleventy 3.x feature)
    dataTemplateEngine: false,
  };
}
