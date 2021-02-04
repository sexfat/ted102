const {
    src,
    series,
    dest,
    parallel,
    watch
} = require('gulp');

//輸出任務一
function func01(cb){
    console.log('任務一');
    cb();
}

// exports.task01 = function func01(cb){
//     console.log('任務一');
//     cb();
//  }

//輸出任務二
function func02(cb){
    console.log('任務二');
    cb();
}

//輸出任務三
function func03(cb){
    console.log('任務三');
    cb();
}

exports.order = series(func01 ,func02); //順序執行任務
exports.paral = parallel(func01 ,func02); //並行任務

exports.all = series(func01 , parallel(func02 ,func03) );








// const fileinclude = require('gulp-file-include');








// exports.html =  function includeHTML(done) {
//     return src('*.html')
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file'
//         }))
//         .pipe(dest('./dist'));
//     done();
// }