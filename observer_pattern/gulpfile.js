var gulp = require("gulp");
var uglify = require("gulp-uglify");

/*
gulp.task(“タスク名”,function() {});でタスクの登録
gulp.src(“MiniMatchパターン”)で読み出したいファイルを指定
pipe(行いたい処理)でsrcで取得したファイルに処理
gulp.dest(“出力先”)で出力先に処理を施したファイルを出力
*/

gulp.task("js", function() {
    gulp.src(["js/**/*.js","!js/min/**/*.js"])
        .pipe(uglify())
        .pipe(gulp.dest("./js/min"));
});

gulp.task("default", function(){
    gulp.watch(["js/**/*.js", "!js/min/**/*.js"], ["js"]);
});
