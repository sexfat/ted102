const {
    src,
    series,
    dest,
    parallel,
    watch
} = require('gulp');


exports.task01 = function func01(cb){
    console.log('任務一');
    cb();
}







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