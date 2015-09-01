require('dotenv').load();

module.exports = function (grunt) {
  grunt.initConfig({
    zip: {
      'makers-blog-theme.zip': ['**/**', '!makers-blog-theme.zip']
    },
   "ghost-upload": {
      options: {
        userEnv: 'GHOST_USER',
        passEnv: 'GHOST_PASS',
        loginURL: 'https://ghost.org/login/',
        loginFormActionURL: 'https://ghost.org/login/',
        blogsURL: 'https://ghost.org/blogs/',
        userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36"
      },
      main: {
        zip: 'makers-blog-theme.zip',
        blog: 'makersacademy'
      },
    },
  });

  grunt.loadNpmTasks('grunt-ghost-upload');
  grunt.loadNpmTasks('grunt-zip');
  grunt.loadNpmTasks('grunt-tag');

  grunt.registerTask('default', ['zip', 'ghost-upload', 'tag']);

};
