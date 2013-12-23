module.exports = {
  options: {
    trace: true,
    noCache: true
  },
  files: {
    options: {
      style: 'expanded'
    },
    dest: "<%= paths.dev_stylesheets %>application.css",
    src: ["<%= paths.dev_sass %>main.scss"]
  }
}