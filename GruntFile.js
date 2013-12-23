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

  // Tasks configurations
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    paths: grunt.file.readJSON('paths.json'),
    banner: grunt.file.readJSON('banner.json'),
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

  // Build Task
  grunt.registerTask('build', ['bower']);

  // Development Task
  grunt.registerTask('default', ['concurrent:development','watch']);

  // Production Task
  grunt.registerTask('deploy', ['concurrent:development','concurrent:production']);
};
