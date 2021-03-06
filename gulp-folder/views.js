

module.exports = function (modules) {
    modules.gulp.task('views', () => {
        return modules.gulp.src('app/views/pages/compile/*.pug')
            .pipe(modules.$.data((file) => {
                return {
                    title: 'test',
                    description: 'test'
                }
            }))
            .pipe(modules.$.plumber())
            .pipe(modules.$.jade({pretty: true}))
            .pipe(modules.rename(function (path) {
                var paths = path.basename.split('/');
                path.dirname = "";
                path.basename = paths[paths.length - 1];
            }))
            .pipe(modules.gulp.dest('app/static'));
    });



};


