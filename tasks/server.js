var gulp = require('gulp');
var connect = require('gulp-connect');
var https = require('https');
var fs = require('fs');

gulp.task('server', function() {
  connect.server({
    root: './',
    livereload: true,
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt')
    }
  });
});