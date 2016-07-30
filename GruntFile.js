//Author: Anup Saw
var _ = require('lodash');
module.exports = function (grunt) {

    //Laod all the using auto gload-grunt-tasks no need to add grunt.loadNpmTask('') 
    require('load-grunt-tasks')(grunt);
    var clientConfig = {
        jsAllFile: ['./client/index.js', './client/app/*.js', './client/app/**/*.js'],
        jsFramework: ['./client/framework_components/*.js', './client/framework_components/**/*.js'],
        jsSpecFile: ['./client/app/**/*-spec.js', './client/app/index-spec.js'],
        lessFile: ['./client/less/*.less', './client/app/*.less', './client/app/**/*.less'],
         htmlFiles:['./client/index.html', './client/app/*.html', './client/app/**/*.html']
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

        clientConfig: {
            jsAllFile: ['client/index.js', 'client/app/*.js', 'client/app/**/*.js'],
            jsSpecFile: ['./client/app/**/*-spec.js', './client/app/index-spec.js'],
            lessFile: ['./client/less/*.less', './client/app/*.less', './client/app/**/*.less']
           
        },


        serverConfig: {
            jsFile: ['./server/**/*.js', './server/index.js']
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
            html:{
                files: clientConfig.htmlFiles, 
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
                    'client/build/vendor.css': 'client/index.less'
                }
            },
            app: {
                files: {
                    'client/build/app.css': clientConfig.lessFile
                }
            }
        },

        injector: {
            options: {
                relative: true
            },
            local_dependencies: {
                options: {
                    ignorePath: clientConfig.jsSpecFile
                },
                files: {
                    'client/index.html': _.concat(clientConfig.jsAllFile, clientConfig.jsFramework)
                }
            }
        },

        includeSource: {
            options: {
                basePath: 'client',
                baseUrl: '',
            },
            myTarget: {
                files: {
                    'client/build/index.html': 'client/index.html'
                }
            }
        }


    });



    grunt.registerTask('default', ['clean', 'jshint', 'wiredep', 'injector', 'less', 'express', 'open', 'watch']);
    grunt.registerTask('server', ['jshint:server']);
    grunt.registerTask('client', ['jshint:client']);
    grunt.registerTask('include', ['clean', 'includeSource']);

    //grunt.registerTask('server', ['jshint']);



};
