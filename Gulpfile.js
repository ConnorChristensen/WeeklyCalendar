//to install a dependency: npm install NAME --save-dev

//include gulp
var gulp = require('gulp');

//include the gulp scss compiler
var scss = require('gulp-scss');

//include the gulp pug compiler
var pug = require('gulp-pug');

//include a fancy destination locator
var dest = require('gulp-dest');

//include the autoprefixer (that auto creates support for old browsers)
var autoprefixer = require('gulp-autoprefixer');

//set the autoprefixer to work on
//  - the last two versions of all major browsers
//  - all browsers that have more than 5% market share
//  - firefox ESR
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


//handle an error instead of puking and dying
function handleError (error) {
    console.log(error.toString());
    this.emit('end');
}

var scssPath = 'scss/**/*.scss';
var pugPath = 'pug/**/*.pug';

//this will compile all our scss files
gulp.task('scss', function() {
    return gulp
        .src(scssPath)
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(dest(':name/:name.css'))
        .pipe(gulp.dest('./gulp_test'));
});

//special case for the scss file in home
gulp.task('scssHome', function() {
     return gulp
        .src('./main.scss')
        .pipe(scss())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./'));
});

//compile all the pug files
gulp.task('pug', function() {
    return gulp
        .src(pugPath)
        .pipe(pug())
        .pipe(dest(':name/index.html'))
        .pipe(gulp.dest('./gulp_test'));
});

//special case for the index page
gulp.task('pugHome', function() {
     return gulp
        .src('./index.pug')
        .pipe(pug())
        .pipe(gulp.dest('./'));
});

//gulp watch will do all the checking and work for us
gulp.task('watch',  function() {
    gulp.watch(scssPath, ['scss']);
    gulp.watch('./index.pug', ['pugHome']);
    gulp.watch('./main.scss', ['scssHome']);
    gulp.watch(pugPath, ['pug']);
    gulp.watch('resources/pug/*.pug', ['pug', 'pugHome']);
    gulp.watch('resources/scss/**/*.scss', ['scss', 'scssHome']);
});