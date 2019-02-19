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
	site: {
		scss: 'assets/scss/*.scss',
		dist: 'dist'
	},
	'foundation': {
		scss: 'node_modules/foundation-sites/scss/'
	}
};

gulp.task('sass', () => {
	gulp.src(global.paths.site.scss)
		.pipe(sass( {
				includePaths: [global.paths.foundation.scss]
			} ).on('erroor', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(global.paths.site.dist))
		.pipe(rename( {suffix: '.min'} ))
		.pipe(gulp.dest(global.paths.site.dist));

});

gulp.task('default', ['sass']);