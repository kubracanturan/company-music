module.exports = function (modules) {


    modules.gulp.task('copy', () => {
        return modules.gulp.src('app/source/copy/**/*')
            .pipe(modules.gulp.dest('app/static/'))
    });

};


