const {
    src,
    series,
    dest,
    parallel,
    watch
} = require('gulp');


const fileinclude = require('gulp-file-include');
 
exports.html =  function includeHTML(done) {
    return src('*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
    done();
}