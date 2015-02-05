module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            doc: {
                files: ['js/*.js'],
                tasks: 'jsdoc'
            }
        },
        jsdoc: {
            doc: {
                src: ['js/*.js'], 
                options: {
                    destination: 'doc'
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', 'jsdoc');
};
