'use strict';

import babelCore from 'babel-core';
import babelEnv from 'babel-preset-env';
import babelTransformRun from 'babel-plugin-transform-runtime';
import babelEs2015 from 'babel-preset-es2015';
import babelReg from 'babel-register';
import chalk from 'chalk';
import critical from 'critical';
import del from 'del';
import log from 'fancy-log';
import gitInformation from 'git-repo-info';
import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import gulpBabel from 'gulp-babel';
import cached from 'gulp-cached';
import concat from 'gulp-concat';
import cssnano from 'gulp-cssnano';
import debug from 'gulp-debug';
import download from 'gulp-download';
import favicon from 'gulp-favicons';
import filter from 'gulp-filter';
import fontello from 'gulp-fontello';
import header from 'gulp-header';
import iffy from 'gulp-if';
import imagemin from 'gulp-imagemin';
import livereload from 'gulp-livereload';
import loadPlugins from 'gulp-load-plugins';
import newer from 'gulp-newer';
import plumber from 'gulp-plumber';
import print from 'gulp-print';
import replace from 'gulp-replace';
import rev from 'gulp-rev';
import sass from 'gulp-sass';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';
import streamify from 'gulp-streamify';
import uglify from 'gulp-uglify';
import moment from 'moment';
import pa11y from 'pa11y';
import vinylStream from 'vinyl-source-stream';

const gitinfo = gitInformation();

import pkg from './package';

// example gulp hi test.
gulp.task('hi', () => {
  console.log('hello');
});


const banner = [
  "/**",
  " * @project       " + pkg.name ,
  " * @author        " + pkg.author ,
  " * @build          " + moment().format("llll") + " ET",
  " * @release        " + gitinfo.abbreviatedSha + " [" + gitinfo.branch + "]",
  " * @copyright      Copyright (c) " + moment().format("YYYY") + " " +  pkg.license ,
  " *",
  " */",
  ""
].join("\n");


const paths = {
  src: {
    base: './src/',
    css: './src/css/',
    fontawesome: './src/fontawesome/',
    fonts: './src/fonts/',
    json: './src/json/',
    js: './src/js/',
    img: './src/img/',
    scss: './src/scss/'
  },
  styles: {
    src: 'src/styles/**/*.sass',
    dest: 'dest/assets/styles/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'dest/assets/scripts/'
  },
  pages: {
    src: 'src/html/**/*.html',
    dest: 'dest/html/'
  },
  index: {
    src: 'src/**/*.html',
    dest: 'dest/'
  },
  vars: {
    "scss": "main.scss",
    "css": "style.css",
    "siteeCss": "site.combined.min.css"
  }
};

gulp.task('hi', () => {
  console.log(chalk.red(banner));
});

gulp.task('mini', () => {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.scripts.dest))
});

gulp.task('scss', () => {
   log(chalk.blue(("-> Compiling Scss: " + paths.src.scss + paths.vars.scss)));
   return gulp.src(paths.src.scss + paths.vars.scss)
     .pipe(plumber({ errorHandler: onError}))
     .pipe(sourcemaps.init())
     .pipe(sass({ includePaths: paths.scss}).on("error", sass.logError))
     .pipe(cached('sass_cimpile'))
     .pipe(autoprefixer())
     .pipe(sourcemaps.write('./'))
     .pipe(size({ gzip: true, showFiles: true }))
     .pipe(gulp.dest(paths.dest.css));
});



