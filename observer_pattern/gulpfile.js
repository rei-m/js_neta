var gulp = require("gulp"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    plumber = require('gulp-plumber');

/*
gulp.task(“タスク名”,function() {});でタスクの登録
gulp.src(“MiniMatchパターン”)で読み出したいファイルを指定
pipe(行いたい処理)でsrcで取得したファイルに処理
gulp.dest(“出力先”)で出力先に処理を施したファイルを出力
*/

gulp.task("js", function() {
    gulp.src("js/es6/**/*.js")
        .pipe(plumber())          // 監視中のエラーによる強制停止を回避
        .pipe(babel())            // ES6をES5準拠に変換
        .pipe(uglify())           // minify
        .pipe(gulp.dest("./js")); //出力
});

gulp.task("default", function(){
    gulp.watch("js/es6/**/*.js", ["js"]);
});
