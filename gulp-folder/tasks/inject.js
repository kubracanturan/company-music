module.exports = (m) => {
    m.gulp.task('inject',  () => {
        return m.gulp.src('app/views/layout/*.pug')
            .pipe(m.wiredep({
                ignorePath: /^(\.\.\/)*\.\./
            }))
            .pipe(m.$.inject(m.series(m.gulp.src(['./app/modules/**/*.js'], {
                read: false
            }).pipe(m.rename(function (path) {
                path.dirname = "/js/";
            }))), {
                relative: false,
                ignorePath: 'app/modules',
                addRootSlash: true
            }))
            .pipe(m.$.header('\ufeff'))
            .pipe(m.gulp.dest('app/views/layout/'));
    });
};







