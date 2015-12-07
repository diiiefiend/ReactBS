var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var streamify = require('gulp-streamify');
var less = require('gulp-less');

var browserSync = require('browser-sync').create();

var paths = {
  HTML: 'src/index.html',
  ASSET_SRC: 'less/',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  ASSET_OUT: 'dist/assets/',
  DEST: 'dist',
  DEST_BUILD: 'dist/build/',
  DEST_SRC: 'dist/src/',
  ENTRY_POINT: './src/js/App.js'
};

var babel_presets = ['es2015', 'react'];

function bundle(bundler){
  return bundler
    .transform(babelify, {presets: babel_presets})
    .bundle()
    .on('error', function (err){
      console.log(err.message);
      this.end();
    })
    .pipe(source(paths.OUT))
    .pipe(gulp.dest(paths.DEST_SRC))
    .pipe(browserSync.stream());
};

gulp.task('buildLESS', function (){
  return gulp.src(paths.ASSET_SRC + '/style.less')
    .pipe(less({
      paths: [paths.ASSET_SRC, paths.ASSET_OUT]
    }))
    .pipe(gulp.dest(paths.ASSET_OUT))
});

gulp.task('replaceHTMLsrc', function (){
  gulp.src(paths.HTML)
    .pipe(htmlreplace({
      'js': 'src/' + paths.OUT
    }))
    .pipe(gulp.dest(paths.DEST));
});

gulp.task('watch', ['replaceHTMLsrc'], function (){
  gulp.watch(paths.HTML, ['replaceHTMLsrc']);
  gulp.watch(paths.ASSET_SRC + '*.less', ['buildLESS']);

  var watcher = watchify(browserify({
    entries: [paths.ENTRY_POINT],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  watcher.on('update', function (){
    bundle(watcher);
    console.log('Updated');
  });

  bundle(watcher);

  browserSync.init({
    server: './dist',
    logFileChanges: false
  });
});

gulp.task('replaceHTML', function (){
  gulp.src(paths.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + paths.MINIFIED_OUT
    }))
    .pipe(gulp.dest(paths.DEST));
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

gulp.task('default', ['watch', 'buildLESS']);

gulp.task('production', ['replaceHTML', 'build']);
