/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function(grunt) {

  // Variables
  var banner = '/* \n' +
   '* Project: <%= pkg.name %> \n' +
   '* Version: <%= pkg.version %> \n' +
   '* Description: <%= pkg.description %> \n' +
   '* Repository: <%= pkg.repository %> \n' +
   '* Authors: <%= pkg.authors.name %> \n' +
   '* Github: <%= pkg.authors.github %> \n' +
   '* Start in: <%= pkg.startin %> \n' +
   '* Last Update: <%= grunt.template.today("dd/mm/yyyy") %> \n' +
   '*/\n';

  // Loading Tasks

  // Html
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // For Style
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-csso');

  // For Images
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Javascript
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Development
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Tasks configurations
  grunt.initConfig(grunt.file.readJSON('grunt-tasks.json'));

  // Build (development) Task
  grunt.registerTask('build', [
    'bower',
    'copy:css_plugins',
    'copy:js_plugins',
    'copy:js_lib',
    'clean'
  ]);

  // Default (development) Task
  grunt.registerTask('default', [
    'htmlbuild',
    "less",
    "sprite",
    'concat',
    'jshint',
    'watch',
    'notify'
  ]);

  // Deploy (production) Task
  grunt.registerTask('deploy', [
    "htmlmin",
    "csso",
    "uglify",
    "imagemin",
    'copy:js_prod_lib',
    "open"
  ]);
};
