const {
    src,
    series,
    dest,
    parallel,
    watch
} = require('gulp');



//輸出任務一
function func01(cb) {
    console.log('任務一');
    cb();
}

// exports.task01 = function func01(cb){
//     console.log('任務一');
//     cb();
//  }

//輸出任務二
function func02(cb) {
    console.log('任務二');
    cb();
}

//輸出任務三
function func03(cb) {
    console.log('任務三');
    cb();
}

exports.order = series(func01, func02); //順序執行任務
exports.paral = parallel(func01, func02); //並行任務
exports.all = series(func01, parallel(func02, func03));


// 搬檔案
exports.moves = function move() {
    return src('move.html').pipe(dest('dest/'))
}

//合併檔案
//引入套件
var concat = require('gulp-concat');

exports.concatfile = function all() {
    return src('css/*.css')
    .pipe(concat('style.css'))
    .pipe(dest('css/all/'))
}

//minify css
//引入套件
const cleanCSS = require('gulp-clean-css');

exports.minicss = function minifycss(){ 
    return src('css/*.css')  //來源檔案
    .pipe(concat('style.css')) // 合併
    .pipe(cleanCSS()) //壓縮
    .pipe(dest('css/minify')) //放到該層目錄
}


//sass 編譯
//套件的引入
var sass = require('gulp-sass');
var rename = require("gulp-rename");

//編譯前的檔案位址
var sourcemaps = require('gulp-sourcemaps');
function sassStyle(){
    return src('dev/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: "compressed"   // nested巢狀  // compressed壓縮  //expanded 原本
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(concat('all.css')) // 合併
    .pipe(cleanCSS()) //壓縮
    .pipe(rename(function(path){
        path.basename += "-mini";
        path.extname = '.css' ;
    }
    ))//更名
    .pipe(dest('css/'))
}

// html template
const fileinclude = require('gulp-file-include');

function includeHTML() {
    return src('dev/*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./'));
}

// 壓縮js

const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


function uglifyjs(){
   return src('dev/js/*.js')
   .pipe(uglify())
   .pipe(rename(function(path){
       path.basename += "-mini";
       path.extname = '.js' ;
   }
   ))
   .pipe(dest('js'))
}

// es6 -> es5

exports.babeljs = function es5(){
    return src('dev/js/es6.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(dest('js'))
}

// 






// 壓縮圖片
const imagemin = require('gulp-imagemin');

function img(){
   return src('images/*.*')
   .pipe(imagemin())
   .pipe(rename(function(path){
    path.basename += "-mini"
    // path.extname = '.js' ;
}
))
   .pipe(dest('images/mini')) 
}

//  清除舊的檔案
var clean = require('gulp-clean');


function cleanfile(){
   return src(['js' , 'css' , 'images/mini/*.*'], {read: false , allowEmpty: true})
   .pipe(clean({
      force: true 
   })) 
}

var browserSync = require('browser-sync').create();
const reload =  browserSync.reload;


exports.default = function browsersync(){
    browserSync.init({
        server: {
            baseDir: "./",
            index : 'index.html'
        }
    });
    watch('dev/sass/*.scss' , sassStyle).on('change' ,reload);
    watch('dev/*.html' , includeHTML).on('change' ,reload);;
} 




//監聽 scss
exports.w = function watchfile(){
    watch('dev/sass/*.scss' , sassStyle);
    watch('dev/*.html' , includeHTML);
}

//  清除js images css  -> 打包
exports.package = series(cleanfile , parallel(img , uglifyjs))





















