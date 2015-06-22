
import InputSubmitView from "../common/InputSubmitView"

/**
 * Viewの作成
 */
export class InputSubmitCreateUserView extends InputSubmitView {

  constructor(el, $inputTextId, $inputTextPass) {
    super(el);
    this.inputTextIdModel = $inputTextId.model;
    this.inputTextPassModel = $inputTextPass.model;
  }

  onClick(e) {

    // デフォルトの動作はキャンセル.
    e.preventDefault();
    e.stopPropagation();

    let $target = $(e.currentTarget);

//    this.model.set($target.val());
  }
}
