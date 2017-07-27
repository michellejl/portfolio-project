module.exports = function(grunt) {

  var config = grunt.file.readYAML('Gruntconfig.yml');

  // load all used grunt tasks
  require('load-grunt-tasks')(grunt);

  // Grunt Tasks by topic:
  require('./grunt_tasks/sass.js')(grunt, config);
  require('./grunt_tasks/javascript.js')(grunt, config);
  require('./grunt_tasks/images.js')(grunt, config);

  grunt.registerTask('default', [
		'sass',
    'csslint',
    'concat',
    'jshint',
    'responsive_images',
    'copy',
    'watch'
	]);

};
