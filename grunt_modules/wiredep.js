 
 module.exports = function() {
 
     var wiredep =  {
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

 
return wiredep;
 }