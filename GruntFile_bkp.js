//Author: Anup Saw
module.exports = function(grunt) {
/* 
Laod all the using auto gload-grunt-tasks
no need to add grunt.loadNpmTask('') 
for more infor refer to below link
https://www.npmjs.com/package/load-grunt-tasks

*/

require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Clean the folder before running any minification 
        clean: {
            js: 'client/build/'
        },

        //concate files
        concat: require('./grunt_modules/concat.js')(),
        includeSource : require('./grunt_modules/auto-include-source.js')(),
        wiredep: {
                app: {
                        src: ['<%= yeoman.app %>/index.html'],
                        ignorePath:  /\.\.\//
                    }
                 },
        //add versioning to files and update index.html
        'cache-busting': {
            js: {
                replace: ['client/index.html'],
                replacement: 'app.jsmin.js',
                file: 'client/build/app.jsmin.js'
            },
            css: {
                replace: ['client/index.html'],
                replacement: 'app.cssmin.css',
                file: 'client/build/app.cssmin.css'
            }
        },
        //Js indent and beautify
        jsbeautifier: {
            files: ["client/js/**/*.js",
                "GruntFile.js",
                'client/build/*.js',
                'client/css/**/*.css',
                'client/index.html',
                'client/view/*.html'
            ],
            options: {
                //config: "path/to/configFile",
                html: {
                    braceStyle: "collapse",
                    indentChar: " ",
                    indentScripts: "keep",
                    indentSize: 4,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    unformatted: ["a", "sub", "sup", "b", "i", "u"],
                    wrapLineLength: 0
                },
                css: {
                    indentChar: " ",
                    indentSize: 4
                },
                js: {
                    braceStyle: "collapse",
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: " ",
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0,
                    endWithNewline: true
                }
            }
        },
        nodemon: {
            dev: 'server.js'
        }

        //Version files with more option 
        // cacheBust:{
        //     
        //     taskName: {
        //             options: {
        //                 algorithm:'md5',
        //                 assets: ['client/build/**'],
        //                 deleteOriginals:true,
        //                 length:16
        //                 
        //             },
        //             src: ['client/index.html']
        //         }
        // },

        //replace file text 
        // replace: {
        //     example: {
        //             src: ['client/index.html'],             // source files array (supports minimatch) 
        //             dest: 'client',             // destination directory or file 
        //             replacements: [{
        //                 from: 'main.min.*.js',                   // string replacement 
        //                 to: function(){
        //                         return 'test'
        //                 }
        //                 }]
        //              }
        //          }

        //    cacheBust:{
        //      taskName: {  
        //             options: {
        //                 assets: ['build/*.{css,js,jpg}'],
        //                 baseDir: 'client',
        //                 deleteOriginals: true
        //             },
        //             files: [{
        //                 expand: true,
        //                 cwd: 'client',
        //                 src: ['*.html']
        //             }]
        //        }
        //    }  

        //anotherway or versioning
        //    rev:{
        //        option:{
        //            algorthm:'md5',
        //            length:8
        //        },
        //        files:{
        //            src:['client/build/*.{js,css}']
        //        }
        //        
        //    }

        //Add Contib lib here;   
    });


// No need as added  load-grunt-tasks to add all the task
    // //Load Tasks
    // grunt.loadNpmTasks('grunt-contrib-clean');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // //grunt.loadNpmTasks('grunt-rev');
    // grunt.loadNpmTasks('grunt-cache-bust');
    // grunt.loadNpmTasks('grunt-cache-busting');

    // grunt.loadNpmTasks("grunt-jsbeautifier");

    // //Start the node server
    // grunt.loadNpmTasks('grunt-nodemon')
grunt.loadNpmTasks('grunt-wiredep');
    //Run Tasks - it will run as per order 1.Clean, 2.concat and so on..
    grunt.registerTask('build', ['clean', 'concat', 'cache-busting', 'jsbeautifier']);

    grunt.registerTask('run', ['clean', 'concat', 'cache-busting', 'jsbeautifier', 'nodemon']);

    grunt.registerTask('jsbeautify', ['jsbeautifier']);
    grunt.registerTask('wiredep', ['wiredep']);

    grunt.registerTask('learn', function() {

        console.log('for logging')
    })


    //grunt.registerTask('default',['concat','rev']);




    //     //to Register the log we can use this 
    //   grunt.loadNpmTasks('Task name');
    //   grunt.registerTask('default',function(){
    //       
    //       grunt.log.write('From Grunt');
    //       
    //   });


};
