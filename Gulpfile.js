var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('default', function () {
  gulp.src('./commonjs-require.js')
    .pipe(uglify())
    .pipe(rename(function (path) {
      if(path.extname === '.js')
        path.basename += '.min';
    }))
    .pipe(gulp.dest('.'));
});