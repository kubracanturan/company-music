module.exports = (m)=> {
    m.gulp.task('images', () => {
        return m.gulp.src('app/source/images/**/*')
            .pipe(m.$.cache(m.$.imagemin({
                progressive: true,
                interlaced: true,
                // don't remove IDs from SVGs, they are often used
                // as hooks for embedding and styling
                svgoPlugins: [{cleanupIDs: false}]
            })))
            .pipe(m.gulp.dest('app/static/images'));
    });
};