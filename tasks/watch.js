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
  sass: {
    files: [
      "<%= paths.dev_sass %>**/*.scss",
      "<%= paths.dev_sass %>*.scss"
    ],
    tasks: ["sass"]
  },
  html: {
    files: [
      "<%= paths.development %>partials/*.html",
      "<%= paths.development %>views/*.html"
    ],
    tasks: ["htmlbuild"]
  }
}