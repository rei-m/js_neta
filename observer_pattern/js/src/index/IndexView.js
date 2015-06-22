
import InputSubmitView from "../common/InputSubmitView"

/**
 * Viewの作成
 */
export class InputSubmitCreateUserView extends InputSubmitView {

  constructor(el, $inputTextId, $inputTextPass) {
    super(el);
  }

  onClick(e) {
    let $target = $(e.currentTarget);
    alert(11234);
//    this.model.set($target.val());
  }
}
