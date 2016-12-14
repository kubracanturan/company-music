module.exports = (m) => {
    m.gulp.task('create', () => {
        const type = process.argv[3];
        const name = process.argv[4];

        if (type == "--module" || type == "-m") {
            m.gulp.src(
                'app/source/trash/templates/module/**/*'
            )
                .pipe(m.$.replace(/module_name/g, name))
                .pipe(m.$.replaceName(/template/g, name))
                .pipe(m.gulp.dest('app/modules/' + name + "/"));
        }

        if (type == "--page" || type == "-p") {
            m.gulp.src(
                'app/source/trash/templates/page.pug'
            )
                .pipe(m.$.replaceName(/page/g, name))
                .pipe(m.gulp.dest('app/views/pages/'));
        }
    });
};




