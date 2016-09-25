var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

//Path variable
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

//BrowserSync - To create server to launch application and also to test application simultaneously 
//in different browsers
gulp.task('serve', function() {

	browserSync.init({
		server: {
			baseDir: '.'
		},
		startPath: 'index.html'
	});

	gulp.watch('*.html').on('change', reload);
	gulp.watch(paths.js.src+'/**/*.js').on('change', reload);
	gulp.watch(paths.css.src+'/**/*.css').on('change', reload);

});


//Wiredep - Task to inject bower js files to main html file
gulp.task('bower-js', function() {

	var target = gulp.src(paths.main+'/index.html');
	
	target.pipe(wiredep())
		.pipe(gulp.dest(paths.main))

});


//Gulp Inject - Task to inject js files into main html file
gulp.task('inject-js', function() {

	var target = gulp.src(paths.main+'/index.html');
	var sources = gulp.src([paths.js.src+'/**/*.js'], {read: false});

	target.pipe(inject(sources), {addRootSlash: false, relative: true})
	.pipe(gulp.dest(paths.main))

});

//Gulp Inject - Task to inject css files into main html file
gulp.task('inject-css', function() {

	var target = gulp.src(paths.main+'/index.html');
	var sources = gulp.src([paths.css.src+'/**/*.css'], {read: false});

	target.pipe(inject(sources), {addRootSlash: false, relative: true})
	.pipe(gulp.dest(paths.main))

});





