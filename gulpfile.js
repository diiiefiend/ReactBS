var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var streamify = require('gulp-streamify');

var paths = {
  HTML: 'src/index.html',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_BUILD: 'dist/build/',
  DEST_SRC: 'dist/src/',
  ENTRY_POINT: './src/js/App.js'
};

var babel_presets = ['es2015', 'react'];

gulp.task('replaceHTMLsrc', function (){
  gulp.src(paths.HTML)
    .pipe(htmlreplace({
      'js': 'src/' + paths.OUT
    }))
    .pipe(gulp.dest(paths.DEST));
});

gulp.task('watch', ['replaceHTMLsrc'], function (){
  gulp.watch(paths.HTML, ['replaceHTMLsrc']);

  var watcher = watchify(browserify({
    entries: [paths.ENTRY_POINT],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function (){
    watcher.transform(babelify, {presets: babel_presets})
      .bundle()
      .pipe(source(paths.OUT))
      .pipe(gulp.dest(paths.DEST_SRC))
      console.log('Updated');
  })
    .transform(babelify, {presets: babel_presets})
    .bundle().on('error', function (err){
      console.log(err.message);
      this.end();
    })
    .pipe(source(paths.OUT))
    .pipe(gulp.dest(paths.DEST_SRC));
});

gulp.task('build', function (){
  browserify({
    entries: [paths.ENTRY_POINT]
  })
    .transform(babelify, {presets: babel_presets})
    .bundle()
    .pipe(source(paths.MINIFIED_OUT))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest(paths.DEST_BUILD));
});

gulp.task('replaceHTML', function (){
  gulp.src(paths.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + paths.MINIFIED_OUT
    }))
    .pipe(gulp.dest(paths.DEST));
});

gulp.task('default', ['watch']);

gulp.task('production', ['replaceHTML', 'build']);
