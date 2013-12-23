module.exports = {
  development: {
    src: "<%= paths.development %>views/*.html",
    dest: "<%= paths.development %>",
    options: {
      sections: {
        "head": "<%= paths.development %>partials/head.html",
        "main-header": "<%= paths.development %>partials/main-header.html",
        "main-footer": "<%= paths.development %>partials/main-footer.html",
        "main-aside": "<%= paths.development %>partials/main-aside.html"
      }
    }
  }
}