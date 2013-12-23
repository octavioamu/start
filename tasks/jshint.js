module.exports = {
  options: {
    curly: true,         // Require {} for every new block or scope
    eqeqeq: true,        // Require triple equals (===) for comparison
    immed: true,         // Require immediate invocations to be wrapped in parens e.g. `(function () { } ());`
    latedef: true,       // Require variables/functions to be defined before being used
    newcap: true,        // Require capitalization of all constructor functions e.g. `new F()`
    noarg: true,         // Prohibit use of `arguments.caller` and `arguments.callee`
    sub: true,           // Tolerate using `[]` notation when it can still be expressed in dot notation
    undef: false,        // Require all non-global variables to be declared (prevents global leaks)
    boss: true,          // Tolerate assignments where comparisons would be expected
    eqnull: true,        // Tolerate use of `== null`
    node: true,          // Node.js,
    expr: true,          // Expected an assignment or function call and instead saw an expression.
    globals: {
      jQuery: true
    }
  },
  files:[
    "<%= paths.dev_javascripts %>custom/**.js",
    "<%= paths.dev_javascripts %>custom/*.js"
  ]
}