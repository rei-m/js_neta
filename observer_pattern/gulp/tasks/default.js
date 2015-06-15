/**
 * defaultタスクはタスク名が指定されない場合に実行される
 */

var gulp = require("gulp");
var config_index = require("../configs/index");

gulp.task("default", function(){
    gulp.watch(config_index.webpack.entry, [config_index.taskName]);
});
