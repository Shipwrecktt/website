import { DateTime } from "luxon";

export default function(eleventyConfig) {
  // Posts collection
  eleventyConfig.addCollection("posts", collectionApi => {
    return collectionApi
      .getFilteredByGlob("./src/posts/*.{md,html}")
      .sort((a, b) => b.date - a.date);
  });

  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", (dateObj, format = "MMMM dd, yyyy") => {
    if (!dateObj) return "";
    return DateTime.fromJSDate(dateObj).toFormat(format);
  });

  // Passthrough for static assets
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Directory configuration
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
}

