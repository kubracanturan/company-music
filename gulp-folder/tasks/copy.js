module.exports = function (m) {
    m.gulp.task('copy', () => {
        return m.gulp.src('app/source/copy/**/*')
            .pipe(m.gulp.dest('app/static/'))
    });

};


