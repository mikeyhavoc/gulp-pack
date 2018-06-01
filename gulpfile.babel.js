import gulp from 'gulp';


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



