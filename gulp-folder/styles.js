module.exports = function (modules) {

    modules.gulp.task('styles', () => {
        return modules.gulp.src('app/source/scss/compile/*.scss')
            .pipe(modules.$.plumber())
            .pipe(modules.$.sourcemaps.init())
            .pipe(modules.$.sassGlob())
            .pipe(modules.$.sass.sync({
                outputStyle: 'expanded',
                precision: 10,
                includePaths: ['.', 'app/modules/**/*', require("bourbon").includePaths]
            }).on('error', modules.$.sass.logError))
            .pipe(modules.$.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
            .pipe(modules.$.sourcemaps.write())
            .pipe(modules.gulp.dest('app/static/css/'))
    });


};


