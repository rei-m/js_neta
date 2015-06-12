/**
 * Viewから値を受け取って、値に対してバリデーションを実行する.
 * バリデーションの結果に応じてイベントを通知する.
 */

$(function(){
  $("input").each(function() {
    new AppView(this);
  });
});

/**
 * Modelの作成
 */
class AppModel {

  constructor(attrs) {

    this.val = "";

    // Validateの定義
    this.attrs = attrs;
    if (attrs === void 0) {
      this.attrs = {
            required : "",
            maxlength : 8,
            minlength : 4
          };
    }

    // Observerの機構を実装.
    this.listeners = {
      valid: [],
      invalid: []
    };
  }

  on(event, func) {
    this.listeners[event].push(func);
  }

  trigger(event) {
    this.listeners[event].map((func) => {
      func();
    });
  }

  set(val) {
    if (this.val === val) return;
    this.val = val;
    this.validate();
  }

  validate() {
    let val;

    // チェック結果確認用
    this.errors = [];

    // attrで定義したチェックを実行
    for (let key in this.attrs) {
      val = this.attrs[key];
      if (!this[key](val)) this.errors.push(key);
    }

    // Validationの結果に応じた処理を実行
    this.trigger(!this.errors.length ? "valid" : "invalid");
  };

  // 必須チェック
  required() {
    return this.val !== "";
  };

  // 文字数上限チェック
  maxlength(num) {
    return this.val.length <= num;
  };

  // 文字数下限チェック
  minlength(num) {
    return num <= this.val.length;
  };
}

/**
 * Viewの作成
 */
class AppView {

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
