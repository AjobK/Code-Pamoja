module.exports = function(grunt) {
    const sass = require('node-sass');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
               implementation: sass,
               sourceMap: true
            },
            dist: {
                files: {
                    'css/index.css': 'sass/*.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: false
            },
            css: {
                files: ['**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
