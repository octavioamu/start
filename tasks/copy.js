module.exports = {
  fonts: {
    expand: true,
    cwd: "<%= paths.dev_fonts %>",
    src: "*",
    dest: "<%= paths.prod_assets %>fonts",
    flatten: true,
    filter: "isFile"
  },
  less: {
    expand: true,
    cwd: '<%= paths.dev_lib %>stylesheets/',
    src: ['**'],
    dest: '<%= paths.dev_less %>lib/',
    flatten: true,
    filter: 'isFile',
    ext: ".less"
  }
}