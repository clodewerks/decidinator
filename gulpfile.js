var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');    
var uglify = require('gulp-uglify'); 

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
});

gulp.task('ship',['ship-html','ship-css','ship-js','ship-fonts','ship-images'],function() {

});
gulp.task('ship-images', function() {
  return gulp.src('app/images/*')
  .pipe(gulp.dest('dist/images'));
});
gulp.task('ship-fonts', function() {
  return gulp.src('app/fonts/*')
  .pipe(gulp.dest('dist/fonts'));
});

gulp.task('ship-html', function() {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('dist/'));
});

gulp.task('ship-css', function() {
  return gulp.src('app/css/**/*.css')
  .pipe(gulp.dest('dist/css/'));
});

gulp.task('ship-js', function() {
  return gulp.src('app/js/**/*.js')
  .pipe(concat('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'));
});