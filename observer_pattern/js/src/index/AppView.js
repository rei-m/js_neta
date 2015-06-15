
import AppModel from "./AppModel"

/**
 * Viewの作成
 */
export default class AppView {

  constructor(el) {

    // エレメントを取得.
    this.$el = $(el);

    // エラー表示用のリストを取得.
    this.$list = this.$el.next().children();

    // エレメントのdata属性の値を取得.
    let obj = this.$el.data();

    // エレメントにrequired属性がついているか判定
    if (this.$el.prop("required")) {
      obj["required"] = "";
    }

    // Modelを作成し、Viewのプロパティとする.
    this.model = new AppModel(obj);
    this.handleEvents();
  }

  handleEvents() {
    let self = this;

    // DomのKeyupとViewのイベントを関連付ける
    this.$el.on("keyup", (e) => {
      self.onKeyUp(e);
    });

    // ModelとViewのイベントを関連付ける
    this.model.on("valid", () => {
      self.onValid();
    });

    this.model.on("invalid", () => {
      self.onInValid();
    });
  }

  onKeyUp(e) {
    let $target = $(e.currentTarget);
    this.model.set($target.val());
  }

  onValid() {
    this.$el.removeClass("error");
    this.$list.hide();
  }

  onInValid() {
    let self = this;
    this.$el.addClass("error");
    this.$list.hide();

    this.model.errors.map((val) => {
      self.$list.filter(`[data-error="${val}"]`).show();
    });
  }
}
