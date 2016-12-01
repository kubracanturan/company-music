module.exports =  (modules) => {
    modules.gulp.task('create', ()=> {
        const type = process.argv[3];
        const name = process.argv[4];

        if (type == "--module" || type == "-m") {

            modules.gulp.src(
                'app/source/trash/templates/module/**/*'
            )
                .pipe(modules.$.replace(/{{module_name}}/g, name))
                .pipe(modules.$.replaceName(/template/g, name))
                .pipe(modules.gulp.dest('app/modules/' + name + "/"));
        }

        if (type == "--page" || type == "-p") {
            modules.gulp.src(
                'app/source/trash/templates/page.pug'
            )
                .pipe(modules.$.replaceName(/page/g, name))
                .pipe(modules.gulp.dest('app/views/pages/'));
        }
    });
};




