module.exports = (m) => {
    m.gulp.task('fonts', () => {
        return m.gulp.src('app/source/fonts/**/*')
            .pipe(m.gulp.dest('app/static/fonts'));
    });
};
