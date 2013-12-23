/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {

  'use strict';

  require("load-grunt-tasks")(grunt);

  function config(name){
    return require("./tasks/" + name);
  }

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

  // Tasks configurations
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: grunt.file.readJSON('paths.json'),
    htmlbuild: config("htmlbuild"),
    htmlmin: config("htmlmin"),
    recess: config("recess"),
    csso: config("csso"),
    jshint: config("jshint"),
    uglify: config("uglify"),
    concat: config("concat"),
    sprite: config("sprite"),
    imagemin: config("imagemin"),
    bower: config("bower"),
    copy: config("copy"),
    watch: config("watch"),
    open: config("open"),
    connect: config("connect"),
    concurrent: config("concurrent")
  });

  // Development Task
  grunt.registerTask('default', ['concurrent:development','watch']);

  // Production Task
  grunt.registerTask('deploy', ['concurrent:development','concurrent:production']);
};
