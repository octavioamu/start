module.exports = {
  production: {
    options: {
      report: "min",
      banner: '<%= banner.name %>' +
        '<%= banner.version %>' +
        '<%= banner.description %>' +
        '<%= banner.repository %>' +
        '<%= banner.authorsName %>' +
        '<%= banner.authorsGithub %>' +
        '<%= banner.startin %>' +
        '<%= banner.lastUpdate %>'
    },
    files: {
      "<%= paths.production %>assets/stylesheets/application.css": "<%= paths.dev_stylesheets %>application.css"
    }
  }
}