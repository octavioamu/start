module.exports = {
  development: {
    src: "<%= paths.dev_images %>sprite/*.png",
    destImg: "<%= paths.dev_images %>sprite.png",
    destCSS: "<%= paths.dev_sass %>lib/sprite.scss",
    algorithm: "left-right",
    padding: 2
  }
}