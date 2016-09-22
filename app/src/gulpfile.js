var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

var paths = {
	main   : '.',
	css   : {
				src: './css'
			},
	font  : {
				src: './font',
			},
	js    : {
				src: './js',
			},
	sass  : {
				src: './sass',
			}
		}


gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: '.'
		},
		startPath: 'index.html'
	})
});

gulp.task('bower-js', function() {
	gulp.src(paths.main+'/index.html')
			.pipe(wiredep())
			.pipe(gulp.dest(paths.main))
});

gulp.task('inject-js', function() {
	var target = gulp.src(paths.main+'/index.html');
	var sources = gulp.src([paths.js.src+'/**/*.js'], {read: false});

	target.pipe(inject(sources), {addRootSlash: false, relative: true})
	.pipe(gulp.dest(paths.main))

});

gulp.task('inject-css', function() {
	var target = gulp.src(paths.main+'/index.html');
	var sources = gulp.src([paths.css.src+'/**/*.css'], {read: false});

	target.pipe(inject(sources), {addRootSlash: false, relative: true})
	.pipe(gulp.dest(paths.main))

});
