/** global requires */
const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemap = require('gulp-sourcemaps');
const chalk = require('chalk');
const log = require('fancy-log');
const newer = require('gulp-newer');
const plumber = require('gulp-plumber');
const size = require('gulp-size');

// css requires
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const cached = require('gulp-cached');

// JS requires ---------------------
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

// banner and pkg info for banner.
const banner = require('moment');
import pkg from './package';

const gitinfo = gitInformation();


// example gulp hi test.
gulp.task('hi', () => {
  console.log('hello');
});


const paths = {
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
  }
};

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