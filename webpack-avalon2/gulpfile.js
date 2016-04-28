'use strict';
var gulp = require('gulp'),

    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),

    webserver = require('gulp-webserver'),//web服务

    gutil = require("gulp-util");

var webpackConf = require('./webpack.config');

var src = process.cwd() + '/www';

gulp.task('webpack-server', function(callback) {
    var WebpackDevServer = require('webpack-dev-server');

    var compiler = webpack(webpackConf);
    var devSvr = new WebpackDevServer(compiler, {
        contentBase: './www',
        publicPath : webpackConf.output.publicPath,
        stats      : webpackConf.devServer.stats
    });

    devSvr.listen(8002, '0.0.0.0', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);

        gutil.log('[webpack-dev-server]','http://localhost:8002');
    });
});

gulp.task('webpack-build', function(callback) {
    webpack(webpackConf, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});



gulp.task('run-webpack', function() {
    gulp.start('webpack-server');
});
