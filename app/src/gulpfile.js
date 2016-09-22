var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

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

var wiredep = require('wiredep').stream;
gulp.task('bower-js', function() {
	gulp.src(paths.main+'/index.html')
			.pipe(wiredep())
			.pipe(gulp.dest(paths.main))
});
