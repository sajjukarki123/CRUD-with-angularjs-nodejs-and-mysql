var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');

var config = {
    path_library: '',
    path_source: 'sources',
    path_dest: 'client_app/css'
}

/**
 * Generates CSS files from SCSS sources with "gulp styles" command
 */
gulp.task('styles', function () {
    var _styles = gulp.src(config.path_source + '/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(config.path_dest + '/'));
});

/**
 * Generate a sprite png  "gulp sprites" command
 */
// gulp.task('sprites', function () {
//     var sprite = gulp.src(config.path_source + '/Icons/*.png').pipe(spritesmith({
//        imgName: 'icons.png',
//        imgPath: '#{$sprite-icons-path}icons.png',
//        cssName: '_icons_generated.scss',
//        cssFormat: 'scss',
//        cssVarMap: function (sprite) {
//           sprite.name = 'icon-' + sprite.name
//        },
//        algorithm: 'top-down',
//        padding: 25
//     }));
//
//     sprite.img.pipe(gulp.dest(config.path_dest + '/Icons/'));
//     sprite.css.pipe(gulp.dest(config.path_source + '/Sass/'));
// });

/**
 * Generates one JS files combining all js files with "gulp scripts".
 */
// gulp.task('scripts', function() {
//     return gulp.src([
//         // 'Resources/Public/Source/Script/countdown/jquery.countdown.js',
//         // config.path_source + '/Script/OwlCarousel/*.js',
//         // config.path_source + '/Script/SwipeBox/*.js',
//         // config.path_source + '/Script/Bootstrap/*.js',
//         // config.path_source + '/Script/*.js'
//     ])
//         .pipe(concat('script.js'))
//         .pipe(gulp.dest(config.path_dest + '/Scripts'));
// });

/**
 * Watches changes in scss files and automatically starts the styles task with "gulp watch" command
 */

// Watch styles and scripts.
gulp.task('watch', ['styles'] , function(){
    gulp.watch(config.path_source + '/sass/*.scss', ['styles']);
});

// Default is to watch.
gulp.task('default', ['watch']);
