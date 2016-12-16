module.exports = function (m) {
    m.gulp.task('serve', ['iconfont', 'inject', 'scripts', 'copy'], () => {
        // region run after tasks
        m.gulp.start('views');
        m.gulp.start('fonts');
        m.gulp.start('styles');
        // endregion
        // region browserSync
        m.browserSync({
            notify: false,
            port: 9000,
            server: {
                baseDir: ['app/static'],
                directory: true,
                routes: {
                    '/bower_components': 'bower_components'
                }
            }
        });
        // endregion
        // region reload browserSync
        let timeout = null;
        m.gulp.watch([
            'app/static/**/*.html',
            'app/static/images/**/*',
            'app/static/fonts/**/*',
            'app/static/js/**/*',
            'app/static/css/**/*'
        ]).on('change', function (g) {
            if (timeout != null) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                m.reload(g);
            }, 300);
        });
        // endregion
        // region watch gulp files
        m.gulp.watch(['gulpfile.js', 'gulp-folder/tasks/*.js'], () => {
            console.log('Run again.'.red);
            process.exit();
        });
        // endregion
        // region watch tasks files
        m.gulp.watch(['app/modules/**/*.scss', 'app/source/scss/compile/*.scss', 'app/source/scss/component/*.scss'], ['styles']);
        m.gulp.watch(['app/modules/**/*.pug', 'app/views/pages/*.pug', 'app/views/layout/*.pug'], ['views']);
        m.gulp.watch(['app/source/icons/*.svg'], ['iconfont']);
        m.gulp.watch(['app/source/js/compile/*.js'], ['scripts']);
        m.gulp.watch(['app/source/fonts/**/*'], ['fonts']);
        m.gulp.watch(['app/source/copy/**/*'], ['copy']);
        m.gulp.watch(['app/source/images/**/*'], ['images']);
        // endregion
    });
};
