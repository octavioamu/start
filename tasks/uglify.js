module.exports = {
  options: {
    compress: true,
    mangle: {
      "except": ["jQuery"]
    }
  },
  my_target: {
    files: {
      "<%= paths.production %>assets/javascripts/application.js": "<%= paths.dev_javascripts %>application.js"
    }
  }
}