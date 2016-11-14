module.exports = function (modules) {
    modules.gulp.task('scripts', () => {
        return modules.gulp.src('app/source/js/compile/*.js')
            .pipe(modules.$.plumber())
            .pipe(modules.$.sourcemaps.init())
            .pipe(modules.$.babel())
            .pipe(modules.$.sourcemaps.write('.'))
            .pipe(modules.rename(function (path) {
                var paths = path.basename.split('/');
                path.dirname = "";
                path.basename = paths[paths.length - 1];
            }))
            .pipe(modules.gulp.dest('app/static/js'));
    });

};



