module.exports = {
  options: {
    stripBanners: true
  },
  development: {
    src: [
      "<%= paths.dev_lib %>javascripts/**/*.js",
      "!<%= paths.dev_lib %>javascripts/**/jquery.min.js",
      "<%= paths.dev_javascripts %>custom/**/*.js",
      "<%= paths.dev_javascripts %>custom/*.js",
    ],
    dest: "<%= paths.dev_javascripts %>application.js"
  }
}