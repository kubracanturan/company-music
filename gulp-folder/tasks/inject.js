module.exports = (m) => {

    m.gulp.task('inject',  () => {
        return m.gulp.src('app/views/layout/*.pug')
            .pipe(m.$.inject(m.series(m.gulp.src(['./app/modules/**/*.js'], {
                read: false
            }).pipe(m.rename(function (path) {
                // let paths = path.basename.split('/');
                path.dirname = "/js/";
            }))), {
                relative: false,
                ignorePath: 'app/modules',
                addRootSlash: true
            }))
           /* .pipe(m.wiredep({
                exclude: ['bootstrap-sass'],
                ignorePath: /^(\.\.\/)*\.\./
            }))*/
            .pipe(m.gulp.dest('app/views/layout/'));
    });

    
};







