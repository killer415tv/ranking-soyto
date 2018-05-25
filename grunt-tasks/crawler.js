/* global require, module */
module.exports = function() {

  var grunt = require('grunt');
  var $config = require('../nodeApp/config');
  var $crawler = require('../nodeApp/crawler');

  //Genrate folders.dates
  grunt.registerTask('generate-folder-dates', 'generate folders dates', function() {
    $crawler.dates.generate();
    grunt.log.ok('Generated ' + $config.files.foldersDates.cyan + ' correctly');
  });

}();