module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files:{
          'dist/css/style.css' : 'sass/style.scss',
          'dist/images/minified/banner1.jpg' : 'dist/images/banner1.jpg',
          'dist/images/minified/banner2.jpg' : 'dist/images/banner2.jpg',
          'dist/images/minified/banner3.jpg' : 'dist/images/banner3.jpg'
        }
      }
    },
    
    imagemin:{
      minify: {
        src: 'dist/images/*.{png,jpg,gif}',
        dest: 'dist/images/minified/*.min.jpg'
      }
    },
    cssmin: {
      minify: {
        src: 'dist/css/style.css',
        dest: 'dist/css/minified/style.min.css'
      }
    },
    watch: {
      css: {
        files: 'sass/**.scss', 
        tasks: ['sass', 'cssmin']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default' ['watch', 'imagemin']);
}