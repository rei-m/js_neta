/**
 * Viewから値を受け取って、値に対してバリデーションを実行する.
 * バリデーションの結果に応じてイベントを通知する.
 */

import InputTextView from "../common/InputTextView"
import {InputSubmitCreateUserView} from "./IndexView"

$(() => {


  $("input[type='text']").each(function() {
    new InputTextView(this);
  });


/*
  let inputTextId = new InputTextView($("#input-text-id"));

  let inputTextPass = new InputTextView($("#input-text-password"));

  new InputSubmitCreateUserView("#submit", inputTextId, inputTextPass);
*/
/*
  $("#submit").on("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    alert(inputs.length);
  });
*/
});
