var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    uglify = require("gulp-uglify"),
    webpack = require("gulp-webpack"),
    config = require("../configs/index");

// タスク名はファイル名と揃える
gulp.task("index", function () {
    gulp.src(config.webpack.entry)
        .pipe(webpack(config.webpack))
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.js.dest)); //出力
});

// こっちはwebpack使わない方の例。jQueryは展開されない
/*
gulp.task(“タスク名”,function() {});でタスクの登録
gulp.src(“MiniMatchパターン”)で読み出したいファイルを指定
pipe(行いたい処理)でsrcで取得したファイルに処理
gulp.dest(“出力先”)で出力先に処理を施したファイルを出力
*/
gulp.task("js", function() {
    gulp.src("js/src/**/*.js")
        .pipe(plumber())          // 監視中のエラーによる強制停止を回避
        .pipe(babel())            // ES6をES5準拠に変換
        .pipe(uglify())           // minify
        .pipe(gulp.dest("./js")); //出力
});
