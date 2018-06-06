const gulp = require('gulp');
const watch = require('gulp-watch');
const rigger = require('gulp-rigger');
const cleanCSS = require('gulp-clean-css');

var paths = {
    css: ['dev/**/*.css'],
    js: ['dev/**/*.js'],
    img: ['dev/**/*.+(png|jpg)'],
    html: ['dev/**/*.html']
};

gulp.task('html_builder', function () {
    gulp.src(paths.html)
        .pipe(rigger())
        .pipe(gulp.dest('build/'));
})

gulp.task('css_minify', function () {
    gulp.src(paths.css)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('build'));
});

gulp.task('watcher', function () {
    gulp.watch([paths.css], ['css_minify']);
    //gulp.watch([paths.js], ['js_minify']);
    //gulp.watch([paths.img], ['img_minify']);
    gulp.watch([paths.css], ['html_builder']);
});