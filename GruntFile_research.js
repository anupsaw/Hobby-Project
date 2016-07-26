//Author: Anup Saw
module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

         clean: {
            js: 'client/build/'
        },
        concat:require('./grunt_modules/concat.js')()
        //concate files
        
    });




    grunt.registerTask('default', ['concat']);

    grunt.registerTask('learn', function() {

        console.log(concat);
    })





};
