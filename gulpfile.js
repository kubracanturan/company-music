const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const del = require('del');
const $ = gulpLoadPlugins();
const rename = require('gulp-rename');
const wiredep = require('wiredep');
const series = require('stream-series');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const colors = require('colors');
const modules = {
    gulp: gulp,
    del: del,
    rename: rename,
    $: $,
    series: series,
    browserSync: browserSync,
    reload: reload,
    wiredep: wiredep,
    colors: colors
};
let config = '';

require("./gulp-folder/tasks/" + 'views.js')(modules, config);
require("./gulp-folder/tasks/" + 'images.js')(modules, config);
require("./gulp-folder/tasks/" + 'serve.js')(modules, config);
require("./gulp-folder/tasks/" + 'copy.js')(modules, config);
require("./gulp-folder/tasks/" + 'fonts.js')(modules, config);
require("./gulp-folder/tasks/" + 'iconfont.js')(modules, config);
require("./gulp-folder/tasks/" + 'styles.js')(modules, config);
require("./gulp-folder/tasks/" + 'scripts.js')(modules, config);
require("./gulp-folder/tasks/" + 'create.js')(modules, config);
require("./gulp-folder/tasks/" + 'inject.js')(modules, config);

