module.exports = function(grunt) {

  // Project configuration
  var banner = '/* \n*   Project: <%= pkg.name %> - version <%= pkg.version %> \n*   Description: <%= pkg.description %> \n*   Repository: <%= pkg.repository %> \n*   Author: <%= pkg.developer %> \n*   Github: <%= pkg.github %> \n*   Start in: <%= pkg.startin %> \n*   Last Update: <%= grunt.template.today("dd-mm-yyyy") %> \n*/ \n',
    js_scripts = [
      '<%= development %>assets/javascripts/specifics/*.js'
    ],
    js_plugins = [
      '<%= development %>assets/javascripts/plugins/*.js'
    ],
    uglify_files = js_plugins.concat(js_scripts);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // For Development
    development: "app/",
    dev_images: "<%= development %>assets/images/",
    dev_less: "<%= development %>assets/less/",
    dev_stylesheets: "<%= development %>assets/stylesheets/",
    dev_javascripts: "<%= development %>assets/javascripts/",

    // For Production
    production: "public/",
    prod_images: "<%= production %>assets/images/",
    prod_stylesheets: "<%= production %>assets/stylesheets/",
    prod_javascripts: "<%= production %>assets/javascripts/",

    url: "<%= production %>index.html",

    less: {
      site: {
        files: {
          '<%= dev_stylesheets %>application.css': '<%= dev_less %>import.less'
        }
      }
    },
    csso: {
      compress: {
        options: {
          report: 'min',
          banner: banner
        },
        files: {
          '<%= prod_stylesheets %>application.css': '<%= dev_stylesheets %>application.css'
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [js_plugins, js_scripts],
        dest: '<%= dev_javascripts %>application.js'
      }
    },
    jshint: {
      files: '<%= dev_javascripts %>application.js',
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        },
        bitwise: true,
        expr: true
      }
    },
    uglify: {
      options: {
        banner: banner,
        compress: true,
        mangle: {
          except: ['jQuery']
        }
      },
      my_target: {
        files: {
          '<%= prod_javascripts %>application.js': '<%= dev_javascripts %>application.js'
        }
      }
    },
    htmlbuild: {
      dist: {
        src: '<%= development %>views/*.html',
        dest: '<%= development %>',
        options: {
          // beautify: true,
          // scripts: {
          //     lib: '<%= root %>javascript/lib/*.js',
          //     custom: '<%= root %>javascript/custom.js'
          // },
          // styles: {
          //     min: '<%= assets %>stylesheets/style.min.css'
          // },
          sections: {
            head: '<%= development %>partials/head.html',
            'main-header': '<%= development %>partials/main-header.html',
            'main-footer': '<%= development %>partials/main-footer.html',
            'main-aside': '<%= development %>partials/main-aside.html'
          }
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          useShortDoctype: true
        },
        expand: true,
        cwd: '<%= development %>',
        src: ['*.html'],
        dest: '<%= production %>'
      }
    },
    sprite:{
      all: {
        src: '<%= dev_images %>sprite/*.png',
        destImg: '<%= dev_images %>sprite.png',
        destCSS: '<%= dev_less %>sprite.less',
        algorithm: 'left-right',
        padding: 2,
      }
    },
    imagemin: {
      dynamic: {
        files: [{
        expand: true,
        cwd: '<%= dev_images %>',
        src: ['*.{png,jpg,gif}'],
        dest: '<%= prod_images %>'
        }]
      }
    },
    watch: {
      options: {
        livereload: true
      },
      javascripts: {
        files: [
          '<%= dev_javascripts %>**/*.js',
          '!<%= dev_javascripts %>lib/*.js'
        ],
        tasks: ['jshint']
      },
      less: {
        files: [
          '<%= dev_less %>**/*.less',
          '<%= dev_les %>*.less'
        ],
        tasks: ['less']
      },
      html: {
        files: [
          '<%= development %>partials/*.html',
          '<%= development %>views/*.html'
        ],
        tasks: ['htmlbuild']
      }
    },
    open : {
      dev : {
        path: '<%= url %>'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          base: ".",
          hostname: "localhost",
          livereload: true,
          open: true
        }
      }
    },
    concurrent: {
      style:  ['less', 'sprite'],
      html:   ['htmlbuild'],
      js:     ['jshint', 'uglify'],
      build:  ['csso', 'imagemin', 'htmlmin', 'uglify', 'open']
    }
  });

  // Style
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Html
  grunt.loadNpmTasks('grunt-html-build');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Js
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Others
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', [
    'concurrent:style',
    'concurrent:html',
    'concurrent:js',
    'connect',
    'watch',
    'notify'
  ]);

  grunt.registerTask('build', [
    'concurrent:build'
  ]);
};
