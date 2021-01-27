const fileinclude = require('gulp-file-include');

function includeHTML(done) {
    return src('*.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest('./dist'));
    done();
}