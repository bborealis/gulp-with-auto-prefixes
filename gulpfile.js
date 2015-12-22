var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

//every time this is run it will pipe the style sheet to the build folder
//TO RUN in the cmd line: gulp styles
gulp.task('styles', function() {
  gulp.src('css/styles.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});

//this watches the css file for changes and pipes it to the build folder.
//TO RUN in the cmd line: gulp watch
gulp.task('watch', function() {
  gulp.watch('css/styles.css', ['styles']);
});
