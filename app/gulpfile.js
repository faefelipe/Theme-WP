// config variables
var FelipeConfig = {
  localPath: 'laurentia_loja',
  scriptsAssets: [
    'scripts/main.js'
  ]
}

// Require packages
var
	gulp         = require('gulp'),
	stylus       = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano      = require('gulp-cssnano'),
	concat       = require('gulp-concat'),
	plumber      = require('gulp-plumber'),
	uglify       = require('gulp-uglify'),
	imagemin     = require('gulp-imagemin'),
	browserSync  = require('browser-sync').create();

// Stylus task + autoprefixer + nanocss
gulp.task('stylus', function () {
    gulp.src('styles/main.styl')
    .pipe(plumber({
        errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(stylus())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(cssnano())
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('../assets/styles'));
});

// Scripts task + concat + uglify
gulp.task('scripts', function () {
	gulp.src(FelipeConfig.scriptsAssets)
	.pipe(plumber({
        errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
	}}))
	.pipe(concat('main-min.js'))
	.pipe(uglify())
	.pipe(browserSync.reload({stream:true}))
	.pipe(gulp.dest('../assets/scripts'));
});

// Images task + imagemin
gulp.task('images', function () {
  gulp.src('images/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}]
  }))
  .pipe(gulp.dest('../assets/images'));
});

// Watch for changes
gulp.task('watch', function() {

  // Watch *.php files
  gulp.watch('../../**/*.php').on('change', browserSync.reload);
  // Watch *.styl files
  gulp.watch('styles/**/*.styl', ['stylus']);
  // Watch *.js files
  gulp.watch('scripts/**/*.js',['scripts']);
  // Watch images folder
  gulp.watch('images/*', ['images']);

});

// Browser-sync server
gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: "http://localhost/" + FelipeConfig.localPath
  });
});

// Default task
gulp.task('default', ['browser-sync', 'watch']);
