module.exports =  (modules) => {

    modules.gulp.task('inject',  () => {
        return modules.gulp.src('app/views/layout/*.jade')
            .pipe(modules.$.inject(series(modules.gulp.src(['./app/modules/**/*.js'], {
                read: false
            }).pipe(modules.rename(function (path) {
                let paths = path.basename.split('/');
                path.dirname = "scripts/";
            }))), {
                relative: false,
                ignorePath: 'app',
                addRootSlash: false
            }))
            .pipe(modules.wiredep({
                exclude: ['bootstrap-sass'],
                ignorePath: /^(\.\.\/)*\.\./
            }))
            .pipe(modules.gulp.dest('app/views/layout/'));
    });

    
};







