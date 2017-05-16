var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch',['serve','sass'], function(){
	gulp.watch('app/scss/**/*.scss',['sass']);
	gulp.watch('app/*.html',['serve']);
	gulp.watch('app/js/**/*.js',['serve']);
	browserSync.reload({stream:true});
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})