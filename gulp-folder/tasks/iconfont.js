module.exports = (m) => {
    m.gulp.task('iconfont', () => {
        m.del.bind(null, ['app/source/fonts/icons/'])
        m.gulp.src('app/source/icons/*.svg')
            .pipe(m.$.iconfontCss({
                fontName: 'icons',
                path: 'scss',
                targetPath: '../../scss/compile/_icons.scss',
                fontPath: '/fonts/icons/'
            }))
            .pipe(m.$.iconfont({
                fontName: 'icons',
                formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
                prependUnicode: true,
                normalize: false,
                appendCodepoints: true
            }))
            .pipe(m.gulp.dest('app/source/fonts/icons/'));
    });
}