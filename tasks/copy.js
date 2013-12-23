module.exports = {
  fonts: {
    expand: true,
    cwd: '<%= paths.dev_fonts %>',
    src: '*',
    dest: '<%= paths.prod_assets %>fonts',
    flatten: true,
    filter: 'isFile'
  },
  sass: {
    expand: true,
    cwd: '<%= paths.dev_lib %>stylesheets/',
    src: ['**'],
    dest: '<%= paths.dev_sass %>lib/',
    flatten: true,
    filter: 'isFile',
    ext: ".scss"
  }
}