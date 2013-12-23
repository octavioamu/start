module.exports = {
  production: {
    cwd: "<%= paths.dev_images %>",
    expand: true,
    src: ["*.{png,jpg,gif}"],
    dest: "<%= paths.production %>assets/images"
  }
}