module.exports = function (modules) {
  modules.gulp.task('serve', ['styles', 'scripts'/*, 'views'*/, 'copy'], () => {
    modules.gulp.watch(['app/source/scss/compile/*.scss'], ['styles']);
    modules.gulp.watch(['app/views/pages/*.pug'], ['views']);
    modules.gulp.watch(['app/source/js/compile/*.js'], ['scripts']);
    modules.gulp.watch(['app/source/copy/**/*'], ['copy']);
  });

};
