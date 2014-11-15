var gulp = require('gulp'),
    replace = require('gulp-replace-task');

gulp.task('js', function () {
  return gulp.src("assets/js/*.js")
             .pipe(replace({
              patterns: [
                {
                  json: {
                    "test": "/say"
                  }
                }
              ]
             }))
             .pipe(gulp.dest("static/js"));
});

gulp.task('default', ['js']);
