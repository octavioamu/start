module.exports = function(grunt) {

    // Project configuration
    var project_files = [
            '../javascript/main.js'
        ],
        plugins_files = [
            'javascript/plugins/*.js'
        ],
        banner = '/* \n*   Project: <%= pkg.projectName %> - v<%= pkg.version %> \n*   Repository: <%= pkg.repository %> \n*   Author: <%= pkg.developer %> \n*   Github: <%= pkg.github %> \n*   Start in: <%= pkg.startin %> \n*   Last Update: <%= pkg.lastupdate %> \n*/ \n',
        uglify_files = plugins_files.concat(project_files);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        views: "../views/",
        assets: "../assets/",
        root: "../",

        less: {
            site: {
                files: {
                    '<%= assets %>stylesheets/custom.css': '<%= assets %>less/import.less'
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
                    '<%= assets %>stylesheets/style.min.css': ['!<%= assets %>stylesheets/style.min.css', '<%= assets %>stylesheets/*.css']
                }
            }
        },
        jshint: {
            files: project_files,
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
                mangle: {
                    except: ['jQuery']
                }
            },
            my_target: {
                files: {
                    '../javascript/custom.js': uglify_files
                }
            }
        },
        htmlbuild: {
            dist: {
                src: '<%= root %>*.html',
                dest: '<%= root %>production/',
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
                        head: '<%= root %>views/head.html',
                        'main-header': '<%= root %>views/main-header.html',
                        'main-footer': '<%= root %>views/main-footer.html',
                        'main-aside': '<%= root %>views/main-aside.html'
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
                    removeOptionalTags: true
              },
              files: {
                '<%= root %>production/': '<%= root %>*.html',
              }
            }
        },
        watch: {
            scripts: {
                files: [
                    '!../javascript/custom.js',
                    '../javascript/**/*.js',
                    '../javascript/*.js'
                ],
                tasks: ['jshint', 'uglify']
            },
            stylesheets: {
                files: [
                    '../less/**/*.less',
                    '../less/*.less'
                ],
                tasks: ['less, csso']
            },
            html: {
                files: [
                    '<%= views %>/*.html',
                    '<%= root %>application.html'
                ],
                tasks: ['htmlbuild']
            }
        }
    });

    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', [
        'build',
        'watch'
    ]);

    grunt.registerTask('build', [
        'less',
        'csso',
        // 'jshint',
        // 'uglify',
        'htmlbuild'
    ]);
};
