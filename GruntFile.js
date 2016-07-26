//Author: Anup Saw
var _ = require('lodash');
module.exports = function (grunt) {

    //Laod all the using auto gload-grunt-tasks no need to add grunt.loadNpmTask('') 
    require('load-grunt-tasks')(grunt);

    var clientConfig = {

        jsFile: ['./client/app/**/*.js', './client/app/index.js'],
        lessFile: ['./client/app/**/*.less', './client/app/index.less']
    }


    var serverConfig = {

        jsFile: ['./server/**/*.js', './server/index.js']

    }

    var gruntConfig = {};
    console.log(_.concat(clientConfig.jsFile, serverConfig.jsFile))
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Clean the folder before running any minification 
        clean: {
            js: 'client/build/'
        },


        //jshint for checking code 
        jshint: {
            client: {
                options: {
                    jshintrc: '.jshintrc',
                    reporter: require('jshint-stylish')
                },
                src: clientConfig.jsFile
            },
            server: {
                options: {
                    jshintrc: '.jshintrc',
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
            },
            production: {
                options: {
                    paths: ['assets/css'],
                    // plugins: [
                    //     new (require('less-plugin-autoprefix'))({ browsers: ["last 2 versions"] }),
                    //     new (require('less-plugin-clean-css'))(cleanCssOptions)
                    // ],
                    modifyVars: {
                        //imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    'path/to/result.css': 'path/to/source.less'
                }
            }
        }


    });



    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('server', ['jshint:server']);
    grunt.registerTask('client', ['jshint:client']);
    //grunt.registerTask('server', ['jshint']);



};
