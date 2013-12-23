module.exports = {
  development: ['bower','htmlbuild','sass','sprite','jshint','concat'],
  production: ['htmlmin','copy:fonts','csso','uglify','imagemin','open']
}