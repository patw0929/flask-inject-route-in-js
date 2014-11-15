var gulp = require('gulp'),
    replace = require('gulp-replace-task');

gulp.task('js', function () {
  var fs = require('fs'),
      routes_file = './routes.json',
      routes_json;

  try {
    routes_json = require(routes_file);
  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.error('Please run "fab generate_routes_json" first.');
      process.nextTick(function () {
        process.exit(0);
      });
    }
  }

  return gulp.src("assets/js/*.js")
             .pipe(replace({
              patterns: [
                {
                  json: routes_json
                }
              ]
             }))
             .pipe(gulp.dest("static/js"));
});

gulp.task('default', ['js']);
