var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');

var paths = {
    typescript: ['src/*.ts']
};

gulp.task('default', ['scripts']);

gulp.task('scripts', function(done) {
    gulp.src(paths.typescript)
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: false,
            target: 'ES5',
            out: 'index.js'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('.'))
        .on('end', done);
});
