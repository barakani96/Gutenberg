var gulp       = require('gulp'),
	sass       = require('gulp-sass'),
	minifyCss = require('gulp-minify-css');
	// sourcemaps = require('gulp-sourcemaps');

gulp.task('build-css', function() {
	return gulp.src('scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
	return gulp.src('dist/**/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist/min'));
});

gulp.task('watch', function() {
	gulp.watch('scss/**/*.scss', ['build-css']);
});

gulp.task('default', ['build-css', 'minify-css']);
