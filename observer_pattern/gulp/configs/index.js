
var taskName = "index";
var fileName = taskName + ".js"

var dest = "./js/build"; // 出力先ディレクトリ
var src = "./js/src/index";  // ソースディレクトリ

var webpack = require("webpack");

module.exports = {

  // タスク名
  taskName : taskName,

  // リソース
  src : src + "/**/*.js",

  // jsのビルド設定
  js: {
    dest: dest,
    uglify: false
  },

  // webpackの設定
  webpack: {
    entry: src + "/" + fileName,
    output: {
      filename: fileName
    },
    resolve: {
      extensions: ["", ".js"],
      modulesDirectories: ["node_modules", "bower_components"],
      alias: {
      }
    },
    plugins: [
      new webpack.ResolverPlugin(
          new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
      ),
      new webpack.optimize.DedupePlugin(),  // ライブラリ間で依存しているモジュールが重複している場合、二重に読み込まないようにする
      new webpack.optimize.AggressiveMergingPlugin(),　//ファイルを細かく分析し、まとめられるところはできるだけまとめてコードを圧縮する
      new webpack.ProvidePlugin({
          jQuery: "jquery",
          $: "jquery",
          jquery: "jquery"
      })
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  }
}
