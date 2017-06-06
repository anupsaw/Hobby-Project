//Author: Anup Saw
var _ = require('lodash');
module.exports = function (grunt) {

    //Laod all the using auto gload-grunt-tasks no need to add grunt.loadNpmTask('') 
    require('load-grunt-tasks')(grunt);
    var clientConfig = {
        jsAllFile: ['./client/index.js', './client/app/*.js', './client/app/**/*.js'],
        jsFile: ['./client/index.js', './client/app/*.js', './client/app/**/*.js', '!./client/app/**/*-spec.js', '!./client/app/index-spec.js'],
        jsFramework: ['./client/framework_components/*.js', './client/framework_components/**/*.js', '!./client/framework_components/template.js'],
        jsSpecFile: ['./client/app/**/*-spec.js', './client/app/index-spec.js'],
        lessFile: ['./client/less/*.less', './client/app/*.less', './client/app/**/*.less'],
        htmlFiles: ['./client/index.html', './client/app/*.html', './client/app/**/*.html'],
        htmlFramework: ['*.tpl.html', '**/*.tpl.html'],
        jsTemplate: ['./client/framework_components/template.js', './client/app/template.js']
    }


    var serverConfig = {
        jsFile: ['./server/**/*.js', './server/index.js']
    }


    var gruntConfig = {};
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Clean the folder before running any minification 
        clean: {
            js: 'client/build/'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep', 'injector'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: _.concat(clientConfig.htmlFiles, clientConfig.htmlFramework),
                tasks: ['ngtemplates'],
                options: {
                    livereload: true
                }
            },
            jsClient: {
                files: _.concat(clientConfig.jsAllFile, clientConfig.jsFramework),
                tasks: ['jshint:client'],
                options: {
                    livereload: true
                }
            },
            jsServer: {
                files: serverConfig.jsFile,
                tasks: ['jshint:server', 'express:dev'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: clientConfig.lessFile,
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                options: {
                    livereload: true
                }
            },
            express: {
                files: serverConfig.jsFile,
                tasks: ['express:dev'],
                options: {
                    spawn: false
                }
            }
        },
        express: {
            options: {
                // Override defaults here
                port: 3000,
                debug: true,
                breakOnFirstLine: true,
            },
            dev: {
                options: {
                    script: 'server.js'
                }
            }
        },

        open: {
            dev: {
                path: 'http://localhost:3000/'
            }
        },
        // Automatically inject Bower components into the app
        wiredep: {

            app: {
                src: ['client/index.html'],
                ignorePath: /\.\.\//
            },
            css: {
                src: ['client/index.html'],
                ignorePath: /\.\.\//
            },
            less: {
                src: ['client/index.less'],
                ignorePath: /(\.\.\/){1,2}bower_components\//
            }
        },
        //jshint for checking code 
        jshint: {
            client: {
                options: {
                    jshintrc: 'client.jshintrc',
                    strict: true,
                    reporter: require('jshint-stylish')
                },
                src: clientConfig.jsAllFile
            },
            server: {
                options: {
                    jshintrc: 'server.jshintrc',
                    strict: false,
                    reporter: require('jshint-stylish')

                },
                src: serverConfig.jsFile
            }
        },

        // less: {
        //     development: {
        //         options: {
        //             paths: ['client/build/css']
        //         },
        //         files: {
        //             'client/build/app.css': clientConfig.lessFile
        //         }
        //     }
        // },

        less: {
            vendor: {
                files: {
                    'client/build/css/vendor.css': 'client/index.less'
                }
            },
            app: {
                files: {
                    'client/build/css/app.css': 'client/less/as-app.less'
                }
            }
        },

        injector: {
            options: {
                relative: true
            },
            less: {
                options: {
                    starttag: '/** injector:{{ext}} */',
                    endtag: '/** endinjector */',
                    transform: function (filepath) {
                        return '@import "' + filepath + '";'
                    },
                    sort: function (a, b) {
                        return a.localeCompare(b);
                    }
                },
                files: {
                    'client/less/as-app.less': _.concat(clientConfig.lessFile,['!./client/less/*.less'])
                }
            },
            frameworkJs: {
                options: {
                    starttag: '<!-- injectFrameWork:{{ext}} -->',
                    endtag: '<!-- endinjector -->',
                    sort: function (a, b) {
                        return b.localeCompare(a);
                    },
                },

                files: {
                    'client/index.html': clientConfig.jsFramework
                }
            },
            templateJs: {
                options: {
                    starttag: '<!-- injectTemplate:{{ext}} -->',
                    endtag: '<!-- endinjector -->'
                },
                sort: function (a, b) {
                    return a.localeCompare(b);
                },
                files: {
                    'client/index.html': clientConfig.jsTemplate
                }
            },
            js: {
                files: {
                    'client/index.html': clientConfig.jsFile
                }
            }

        },

        ngtemplates: {
            framework: {
                src: clientConfig.htmlFramework,
                dest: 'client/framework_components/template.js',
                cwd: './client/framework_components',
                options: {
                    module: 'as-ui',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: false,
                        removeAttributeQuotes: true,
                        removeComments: true, // Only if you don't use comment directives! 
                        removeEmptyAttributes: true,
                        removeRedundantAttributes: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                }
            }

        },

        copy: {
            fonts: {
                expand: true,
                cwd: './client/bower_components/font-awesome/fonts/',
                src: '*',
                dest: './client/build/fonts/'
            }
        },
    });



    grunt.registerTask('default', ['clean', 'copy', 'jshint', 'wiredep', 'ngtemplates', 'injector', 'less', 'express', 'open', 'watch']);
    grunt.registerTask('inject', ['injector']);
    grunt.registerTask('build', ['clean', 'jshint', 'wiredep', 'ngtemplates', 'injector', 'less']);
    grunt.registerTask('test2', ['ngtemplates']);
    grunt.registerTask('copytest', ['copy']);


    //grunt.registerTask('server', ['jshint']);



};
