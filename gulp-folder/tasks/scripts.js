module.exports = function (m) {
    m.gulp.task('scripts', () => {
        return m.gulp.src(['app/source/js/compile/*.js', 'app/modules/**/*.js'])
            .pipe(m.$.plumber())
            .pipe(m.$.sourcemaps.init())
            .pipe(m.$.sourcemaps.write('.'))
            .pipe(m.rename(function (path) {
                const paths = path.basename.split('/');
                path.dirname = "";
                path.basename = paths[paths.length - 1];
            }))
            .pipe(m.gulp.dest('app/static/js'));
    });

};



