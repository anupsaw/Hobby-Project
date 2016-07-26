//Author: Anup Saw
var _ = require('lodash');
module.exports = function (grunt) {

    //Laod all the using auto gload-grunt-tasks no need to add grunt.loadNpmTask('') 
    require('load-grunt-tasks')(grunt);

    var clientConfig = {
        jsAllFile: ['./client/app/**/*.js', './client/app/index.js'],
        jsSpecFile: ['./client/app/**/*-spec.js', './client/app/index-spec.js'],
        lessFile: ['./client/app/**/*.less', './client/app/index.less']
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
                tasks: ['wiredep'],
                options: {
                    livereload: true
                }
            },
            jsClient: {
                files: clientConfig.jsAllFile,
                tasks: ['jshint:client'],
                options: {
                    livereload: true
                }
            },
             jsServer: {
                files: serverConfig.jsFile,
                tasks: ['jshint:server','express:dev'],
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
                port: 3000
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
            less: {
                src: ['client/build/{,*/}*.{scss,sass,less}'],
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

        less: {
            development: {
                options: {
                    paths: ['client/build/css']
                },
                files: {
                    'client/build/app.css': 'client/app/**/*.less'
                }
            }
        }


    });



    grunt.registerTask('default', ['jshint','less', 'wiredep', 'express', 'open', 'watch']);
    grunt.registerTask('server', ['jshint:server']);
    grunt.registerTask('client', ['jshint:client']);
    //grunt.registerTask('server', ['jshint']);



};
