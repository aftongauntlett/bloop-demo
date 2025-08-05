// Eleventy 3.x computed data for better data cascade
export default {
  // Automatically generate page titles if not specified
  title: (data) => {
    if (data.title) return data.title;
    if (data.page.fileSlug === "index") return "Home";
    // Capitalize first letter of file slug
    return (
      data.page.fileSlug.charAt(0).toUpperCase() + data.page.fileSlug.slice(1)
    );
  },

  // Generate consistent meta descriptions
  description: (data) => {
    if (data.description) return data.description;
    return `${data.title} - ${data.site.description}`;
  },

  // Ensure all pages have proper URLs
  permalink: (data) => {
    if (data.permalink) return data.permalink;
    if (data.page.fileSlug === "index") return "/";
    return `/${data.page.fileSlug}/`;
  },
};
