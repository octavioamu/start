module.exports = {
  options: {
    compress: true,
    banner: '<%= banner.name %>' +
      '<%= banner.version %>' +
      '<%= banner.description %>' +
      '<%= banner.repository %>' +
      '<%= banner.authorsName %>' +
      '<%= banner.authorsGithub %>' +
      '<%= banner.startin %>' +
      '<%= banner.lastUpdate %>',
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