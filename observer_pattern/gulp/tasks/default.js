/**
 * defaultタスク.gulp コマンドでタスク名を指定しない場合に実行.
 */
var gulp = require("gulp");
var config_index = require("../configs/index");

gulp.task("default", function(){

  // commonには共通の汎用的なモジュールを配置し、実行タスクは全タスクにする.
  gulp.watch("./js/src/common/**/*.js", [config_index.taskName]);

  // 各タスクは対応するディレクトリを掘ってそこを監視対象とする.
  gulp.watch(config_index.src, [config_index.taskName]);

});
