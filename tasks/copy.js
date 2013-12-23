module.exports = {
  fonts: {
    expand: true,
    cwd: "<%= paths.dev_fonts %>",
    src: "*",
    dest: "<%= paths.prod_assets %>fonts",
    flatten: true,
    filter: "isFile"
  }
}