module.exports = {
  production: {
    options: {
      report: "min"
    },
    files: {
      "<%= paths.production %>assets/stylesheets/application.css": "<%= paths.dev_stylesheets %>application.css"
    }
  }
}