var gulp = require('gulp');
var jade = require('gulp-jade');
var pages = require('gulp-gh-pages');

gulp.task('deploy', () => {
  return gulp.src('app/**/*')
    .pipe(pages());
});

gulp.task('html', () => {
  return gulp.src(['src/jade/**/*.jade', '!src/jade/includes/*'])
    .pipe(jade())
    .pipe(gulp.dest('app'));
});

gulp.task('watcher', () => {
  return gulp.watch('src/jade/**/*.jade', ['html']);
});

gulp.task('default', ['html', 'watcher']);
