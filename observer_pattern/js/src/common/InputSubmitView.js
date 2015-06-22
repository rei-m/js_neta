
import InputTextModel from "./InputTextModel"

/**
 * Viewの作成
 */
export default class InputSubmitView {

  constructor(el) {

    // エレメントを取得.
    this.$el = $(el);

    // エレメントのdata属性の値を取得.
    let elData = this.$el.data();


    // Modelを作成し、Viewのプロパティとする.
//    this.model = new InputTextModel(elData);

    // Eventを登録する.
    this.handleEvents();
  }

  handleEvents() {
    let self = this;

    // DomのKeyupとViewのイベントを関連付ける
    this.$el.on("click", (e) => {
      self.onClick(e);
    });

    // ModelとViewのイベントを関連付ける
/*
    this.model.on("valid", () => {
      self.onValid();
    });

    this.model.on("invalid", () => {
      self.onInValid();
    });
*/

  }

  onClick(e) {
    let $target = $(e.currentTarget);
    alert(1);
//    this.model.set($target.val());
  }

  onValid() {
    this.$el.removeClass("error");
//    this.$list.hide();
  }

  onInValid() {
    let self = this;
    this.$el.addClass("error");
//    this.$list.hide();
//    this.model.errors.map((val) => {
//      self.$list.filter(`[data-error="${val}"]`).show();
//    });
  }
}
