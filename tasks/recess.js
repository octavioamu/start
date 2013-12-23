module.exports = {
  development: {
    options: {
      compile: true,
      compress: false,
      noIDs: false,
      noJSPrefix: false,
      noOverqualifying: false,
      noUnderscores: false,
      noUniversalSelectors: false,
      prefixWhitespace: false,
      strictPropertyOrder: false,
      zeroUnits: false
      //includePath: "<%= paths.dev_lib %>stylesheets/**/"
    },
    files: {
      "<%= paths.dev_stylesheets %>application.css": "<%= paths.dev_less %>import.less"
    }
  }
}