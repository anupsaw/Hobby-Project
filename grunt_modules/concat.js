 
 module.exports = function() {
 
     var concat =  {
            options: {
                separator: ';'

            },
            js: {

                src: ['client/js/*.js', 'client/js/**/*.js'],
                dest: 'client/build/app.jsmin.js'
            },
            css: {

                src: 'client/css/**/*.css',
                dest: 'client/build/app.cssmin.css'
            },


        }

 
return concat;
 }