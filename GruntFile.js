module.exports = function(grunt) {

    // Project configuration
    var banner = '/* \n*   Project: <%= pkg.name %> - version <%= pkg.version %> \n*   Description: <%= pkg.description %> \n*   Repository: <%= pkg.repository %> \n*   Author: <%= pkg.developer %> \n*   Github: <%= pkg.github %> \n*   Start in: <%= pkg.startin %> \n*   Last Update: <%= pkg.lastupdate %> \n*/ \n',
        js_scripts = [
            '!<%= development %>assets/javascript/scripts.min.js',
            '<%= development %>assets/javascript/*.js'
        ],
        js_plugins = [
            '<%= development %>assets/javascript/plugins/*.js'
        ],
        uglify_files = js_plugins.concat(js_scripts);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        development: "development/",
        staging: "staging/",
        production: "production/",
        less: {
            site: {
                files: {
                    '<%= staging %>assets/stylesheets/custom.css': '<%= development %>assets/less/import.less'
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
                    '<%= production %>assets/stylesheets/style.min.css': ['<%= staging %>assets/stylesheets/custom.css']
                }
            }
        },
        jshint: {
            files: uglify_files,
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                },
                bitwise: true,
                expr: true,
                ignores: ['<%= development %>assets/javascript/scripts.min.js']
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
                    '<%= staging %>assets/javascript/scripts.min.js': uglify_files,
                    '<%= production %>assets/javascript/scripts.min.js': uglify_files
                }
            }
        },
        htmlbuild: {
            dist: {
                src: '<%= development %>views/*.html',
                dest: '<%= staging %>',
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
                cwd: '<%= staging %>',
                src: ['*.html'],
                dest: '<%= production %>'
            }
        },
        jade: {
          compile: {
            options: {
                pretty: true,
                data: {
                    debug: false
                }
            },
            files: {
              "<%= development %>jade/jade.html": ["<%= development %>jade/*.jade"]
            }
          }
        },
        sprite:{
            all: {
                src: ['<%= development %>assets/images/*.png', '!<%= development %>assets/images/sprite.png' ],
                destImg: '<%= development %>assets/images/sprite.png',
                destCSS: '<%= development %>assets/less/sprite.less',
                algorithm: 'left-right',
                padding: 2,
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: [
                    '<%= development %>assets/javascript/**/*.js',
                    '<%= development %>assets/javascript/*.js'
                ],
                tasks: ['jshint', 'uglify']
            },
            stylesheets: {
                files: [
                    '<%= development %>assets/less/**/*.less',
                    '<%= development %>assets/less/*.less'
                ],
                tasks: ['less, csso']
            },
            html: {
                files: [
                    '<%= development %>partials/*.html',
                    '<%= development %>views/*.html'
                ],
                tasks: ['htmlbuild',]
            },
            html2: {
                files: [
                    '<%= development %>partials/*.html',
                    '<%= development %>views/*.html'
                ],
                tasks: ['htmlmin']
            },
            jade_html: {
                files: [
                  '<%= development %>jade/*.jade'
                ],
                tasks: ['jade']
            }
        },
        concurrent: {
            style:  ['less', 'sprite'],
            html:   ['htmlbuild', 'jade'],
            js:     ['jshint', 'uglify'],
            watch:  ['watch'],
            production:  ['csso', 'htmlmin', 'uglify']
        },
    });

    // Style
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-spritesmith');

    // Html
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // Js
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Others
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', [
        'concurrent:style',
        'concurrent:html',
        'concurrent:js',
        'concurrent:watch'
    ]);

    grunt.registerTask('production', [
        'concurrent:production'
    ]);
};
