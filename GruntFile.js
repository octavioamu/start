module.exports = function(grunt) {

    // Project configuration
    var banner = '/* \n*   Project: <%= pkg.name %> - version <%= pkg.version %> \n*   Description: <%= pkg.description %> \n*   Repository: <%= pkg.repository %> \n*   Author: <%= pkg.developer %> \n*   Github: <%= pkg.github %> \n*   Start in: <%= pkg.startin %> \n*   Last Update: <%= grunt.template.today("dd-mm-yyyy") %> \n*/ \n',
        js_scripts = [
            '<%= development %>assets/javascripts/*.js'
        ],
        js_plugins = [
            '<%= development %>assets/javascripts/plugins/*.js'
        ],
        uglify_files = js_plugins.concat(js_scripts);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        development: "app/",
        production: "public/",
        url: "<%= production %>index.html",
        less: {
            site: {
                files: {
                    '<%= development %>assets/stylesheets/custom.css': '<%= development %>assets/less/import.less'
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
                    '<%= production %>assets/stylesheets/custom.css': ['<%= development %>assets/stylesheets/custom.css']
                }
            }
        },
        jshint: {
            files: js_scripts,
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
                    '<%= production %>assets/javascript/custom.js': uglify_files
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
                src: ['<%= development %>assets/images/sprite/*.png'],
                destImg: '<%= development %>assets/images/sprite.png',
                destCSS: '<%= development %>assets/less/sprite.less',
                algorithm: 'left-right',
                padding: 2,
            }
        },
        imagemin: {
            dynamic: {
              files: [{
                expand: true,
                cwd: '<%= development %>assets/images',
                src: ['*.{png,jpg,gif}'],
                dest: '<%= production %>assets/images'
              }]
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
                tasks: ['jshint']
            },
            stylesheets: {
                files: [
                    '<%= development %>assets/less/**/*.less',
                    '<%= development %>assets/less/*.less'
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
        shell: {
            browsing: {
                options: {
                    stdout: true
                },
                command: [
                    'xdg-open "<%= url %>" ',
                    'open "<%= url %>" '
                ].join('&&')
            }
        },
        concurrent: {
            style:  ['less', 'sprite'],
            html:   ['htmlbuild'],
            js:     ['jshint', 'uglify'],
            build:  ['csso', 'imagemin', 'htmlmin', 'uglify', 'shell']
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

    // Others
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', [
        'concurrent:style',
        'concurrent:html',
        'concurrent:js',
        'watch',
        'notify'
    ]);

    grunt.registerTask('build', [
        'concurrent:build'
    ]);
};
