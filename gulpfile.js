const gulp = require('gulp'); // модуль gulp
const rename = require("gulp-rename"); // rename файлов
const browserSync = require("browser-sync") // перезагрузка браузера
const sourcemaps = require('gulp-sourcemaps'); // карта исходных файлов

// CSS
const gulpStylus = require('gulp-stylus'); // компиляция stylus в CSS
const concatCss = require('gulp-concat-css'); // модуль соединения файлов CSS
const autoprefixer = require('gulp-autoprefixer'); // автопрефиксер для CSS
const csso = require('gulp-csso'); // сжатие CSS
const rupture = require('rupture'); // braikpoints for CSS

// JS
const webpack = require('webpack'); // webpack
const webpackConfig = require('./src/scripts/webpack.config.js'); // webpack конфиг с путями для js

// Изображения
const gulpImagemin = require('gulp-imagemin'); // сжатие изображений
const imageminJpegRecompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');

// Очистка
const clean = require('gulp-clean');

function browserSyncInit(cb) {
    browserSync.init({
        proxy: 'mrpont/'
    });
    cb();
}

function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}


function watchFiles() {
    gulp.watch("./src/scripts/**/*.js", gulp.series(jsBuild, browserSyncReload));
    gulp.watch("./src/styles/**/*.styl", cssBuild);
    gulp.watch("./src/images/**/*.*", optimizationImages);
    gulp.watch("./**/*.php", browserSyncReload);
}

function cleanJsCss() {
    return gulp.src(['./dist/css', './dist/js'], {allowEmpty: true})
        .pipe(clean());
}

function cleanOptionImages() {
    return gulp.src('./dist/images', {allowEmpty: true})
        .pipe(clean());
}

function cssBuild() {
    // console.log('\x1b[32m', 'Готово!');
    return gulp.src('./src/styles/index.styl')
        .pipe(sourcemaps.init())
        .pipe(gulpStylus({use:[rupture()]}))
        .pipe(rename('main.min.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false,
            grid: 'autoplace'
        }))
        .pipe(csso())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
}

function jsBuild(cb) {
        webpack(webpackConfig, function(err, stats) {
            if (err || stats.hasErrors()) {
                // Handle errors here
                cb("Ошибка сборки модулей js (webpack)");
                // return false;
             }
             // Done processing
             cb();
        });
}

function optimizationImages(cb) {
    return gulp.src('./src/images/**/*.*')
        .pipe(gulpImagemin([
            gulpImagemin.gifsicle({interlaced: true}),
            gulpImagemin.jpegtran({progressive: true}),
            imageminJpegRecompress({
                loops: 5,
                min: 65,
                max: 70,
                quality:'medium',
                progressive: true
            }),
            gulpImagemin.optipng({optimizationLevel: 3}),
            pngquant({quality: [0.7, 0.8], speed: 5})
        ]))
        .pipe(gulp.dest('./dist/images/'))
        .pipe(browserSync.stream());
}

exports.cleanJsCss = cleanJsCss;
exports.cleanImg = cleanOptionImages;
exports.cleanAll = gulp.series(cleanJsCss, cleanOptionImages);
exports.optimImg = optimizationImages;
exports.build = gulp.parallel(cssBuild, jsBuild, optimizationImages);
exports.default = gulp.series(exports.cleanAll, exports.build, browserSyncInit, watchFiles);
