/**
 * Viewから値を受け取って、値に対してバリデーションを実行する.
 * バリデーションの結果に応じてイベントを通知する.
 */

import InputTextView from "../common/InputTextView"

$(function(){

  let inputs = [];

  $("input[type='text']").each(function() {
    inputs.push(new InputTextView(this));
  });

  $("#submit").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    alert(inputs.length);
  });
});
