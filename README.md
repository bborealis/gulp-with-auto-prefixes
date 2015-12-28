# _Gulp.js Autoprefixer_
##### _12/22/2015_



## Description

_How to set up a site using gulp.js and autoprefixer._
* Check if node is installed

    cmd line: node -v

* Create json file

    cmd line: npm init

* Install gulp

    cmd line: npm install --global gulp

    cmd line: npm install --save-dev gulp

* Install autoprefixer (verify install by checking the json file)

  cmd line: npm install --save-dev gulp-autoprefixer

* Create gulp file in project directory

    cmd line: touch gulpfile.js

* Add to gulpfile.js the following :

```javascript
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


```
* Make sure to link your html page to the build/syles.css file
* //TO RUN in the cmd line: gulp watch
