/**
 * Viewから値を受け取って、値に対してバリデーションを実行する.
 * バリデーションの結果に応じてイベントを通知する.
 */

import AppView from "./compornents/AppView"

$(function(){
  $("input").each(function() {
    new AppView(this);
  });
});
