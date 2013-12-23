module.exports = {
  development: {
    src: "<%= paths.dev_images %>sprite/*.png",
    destImg: "<%= paths.dev_images %>sprite.png",
    destCSS: "<%= paths.dev_less %>sprite.less",
    algorithm: "left-right",
    padding: 2
  }
}