
var taskName = "index";
var fileName = taskName + ".js"

var dest = "./js/build"; // 出力先ディレクトリ
var src = "./js/src/index";  // ソースディレクトリ

var webpack = require("webpack");

module.exports = {

  // タスク名
  taskName : taskName,

  // jsのビルド設定
  js: {
    dest: dest,
    uglify: true
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
    //      new webpack.optimize.DedupePlugin(),
    //      new webpack.optimize.AggressiveMergingPlugin(),
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
