// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask;

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('concat', function () {
    return gulp
        .src('./source/*.js') //輸入資料來源路徑
        .pipe(concat('all.js')) //輸出檔案名稱
        .pipe(gulp.dest('./dist/')); //輸出檔案路徑
});




