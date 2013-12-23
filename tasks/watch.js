module.exports = {
  options: {
    livereload: true
  },
  javascripts: {
    files: [
      "<%= paths.dev_javascripts %>**/*.js",
      "!<%= paths.dev_javascripts %>*.js"
    ],
    tasks: ["jshint", "concat"]
  },
  recess: {
    files: [
      "<%= paths.dev_less %>**/*.less",
      "<%= paths.dev_less %>*.less"
    ],
    tasks: ["recess"]
  },
  html: {
    files: [
      "<%= paths.development %>partials/*.html",
      "<%= paths.development %>views/*.html"
    ],
    tasks: ["htmlbuild"]
  }
}