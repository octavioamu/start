module.exports = {
  development: ['bower','htmlbuild','recess','sprite','jshint','concat'],
  production: ['htmlmin','copy:fonts','csso','uglify','imagemin','open']
}