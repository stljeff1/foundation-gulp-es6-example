'use strict';

import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import concat from 'gulp-concat';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cssNano from 'gulp-cssnano';
import rename from 'gulp-rename';
import gutil from 'gulp-util';


global.paths = {
	'foundation_sass': {
		src: 'node_modules/foundation-sites/scss/',
		init: 'assets/scss/foundation-custom.scss',
		dist: 'dist'
	}
};

gulp.task('foundation-sass', () => {
	gulp.src(global.paths.foundation_sass.init)
		.pipe(sass( {
				includePaths: [global.paths.foundation_sass.src]
			} ).on('erroor', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(global.paths.foundation_sass.dist))
		.pipe(rename( {suffix: '.min'} ))
		.pipe(gulp.dest(global.paths.foundation_sass.dist));

});

gulp.task('default', ['foundation-sass']);