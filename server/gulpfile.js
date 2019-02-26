var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');
var browserify = require('browserify');
var babelify = require('babelify');
var babel = require('gulp-babel');
var source = require('vinyl-source-stream');
var ngAnnotate = require("browserify-ngannotate");
var less = require('gulp-less');


gulp.task('compile', () => {
    browserify('./application/app/app.js')
    .transform(babelify, {presets: ["es2015"]})
    .transform(ngAnnotate)
    .bundle()
    .pipe(source('script.js'))
    .pipe(gulp.dest('./application/app/build/script/'));
})

gulp.task('compileCss', () => {
    gulp.src('./application/app/public/style/*.less')
        .pipe(less())
        .pipe(concat('style.css'))
        // .pipe(cleanCss())
        .pipe(gulp.dest('./application/app/public/css/'));
});

gulp.task('watch', () => {
    gulp.watch('./application/app/**/*.js', function(){
        gulp.run('compile');
    });    
});
gulp.task('build', ['compile', 'compileCss']);