module.exports = function (grunt, config) {
  grunt.config.merge({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 400,
            name: 'small'
          }, {
            width: 800,
            name: 'large'
          }, {
            width: 1200,
            name: 'hero'
          }]
        },
        files: [{
          expand: true,
          src: ['**/*.{jpg,gif,png}'],
          cwd: config.imgSrcDir,
          dest: config.imgOptimizedDir
        }]
      }
    },
    copy: {
      dev: {
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'src/img/',
          dest: 'dist/img'
        }]
      }
    }
  });
};
