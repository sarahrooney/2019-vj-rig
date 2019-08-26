var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function() {
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',
      livereload: true,
      open: true,
      https: {
        key: './server.key',
        cert: './server.crt'
      }
    }));
});
