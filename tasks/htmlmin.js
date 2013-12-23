module.exports = {
  development: {
    options: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeRedundantAttributes: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      useShortDoctype: true
    },
    expand: true,
    cwd: "<%= paths.development %>",
    src: ["*.html"],
    dest: "<%= paths.production %>"
  }
}