module.exports = function (m) {
    m.gulp.task('views', () => {
        return m.gulp.src('app/views/pages/*.pug')
            .pipe(m.$.data(() => {
                return {
                    title: 'Title',
                    description: 'Company music Rendering'
                }
            }))
            .pipe(m.$.plumber())
            .pipe(m.$.pug())
            .pipe(m.rename(function (path) {
                const paths = path.basename.split('/');
                path.dirname = "";
                path.basename = paths[paths.length - 1];
            }))
            .pipe(m.gulp.dest('app/static/static'));
    });
};


