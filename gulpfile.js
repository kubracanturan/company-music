
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const del = require('del');
const $ = gulpLoadPlugins();
const rename = require('gulp-rename');
const wiredep = require('wiredep');
var modules = {
    gulp: gulp,
    del: del,
    rename: rename,
    $: $,
    wiredep: wiredep
};


require("./gulp-folder/" + 'views.js')(modules);
require("./gulp-folder/" + 'serve.js')(modules);
require("./gulp-folder/" + 'copy.js')(modules);
require("./gulp-folder/" + 'styles.js')(modules);
require("./gulp-folder/" + 'scripts.js')(modules);
require("./gulp-folder/" + 'create.js')(modules);
require("./gulp-folder/" + 'inject.js')(modules);
