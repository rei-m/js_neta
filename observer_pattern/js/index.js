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
var AppModel = (function(){

  function AppModel(attrs) {
    // new しないとエラーにする.関数呼び出しはNG.
    this.initialize.apply(this, arguments);
  }

  AppModel.prototype.initialize = function(attrs) {
    this.val = "";

    // Validateの定義
    this.attrs = {
      required : "",
      maxLength : 8,
      minLength : 4
    };

    // Observerの機構を実装.
    this.listeners = {
      valid: [],
      invalid: []
    };
  };

  AppModel.prototype.on = function(event, func) {
    this.listeners[event].push(func);
  };

  AppModel.prototype.trigger = function(event) {
    $.each(this.listeners[event], function(){
      this();
    });
  };

  AppModel.prototype.set = function(val) {
    if (this.val === val) return;
    this.val = val;
    this.validate();
  };

  AppModel.prototype.validate = function() {
    var val;

    // チェック結果確認用
    this.errors = [];

    // attrで定義したチェックを実行
    for (var key in this.attrs) {
      val = this.attrs[key];
      if (!this[key](val)) this.errors.push(key);
    }

    // Validationの結果に応じた処理を実行
    this.trigger(!this.errors.length ? "valid" : "invalid");
  };

  // 必須チェック
  AppModel.prototype.required = function() {
    return this.val !== "";
  };

  // 文字数上限チェック
  AppModel.prototype.maxLength = function(num) {
    return this.val.length <= num;
  };

  // 文字数下限チェック
  AppModel.prototype.minLength = function(num) {
    return num <= this.val.length;
  };

  return AppModel;
})();

/**
 * Viewの作成
 */
var AppView = (function(){
  function AppView() {
    // new しないとエラーにする.関数呼び出しはNG.
    this.initialize.apply(this, arguments);
    this.handleEvents();
  }

  AppView.prototype.initialize = function(el) {

    // エレメントを取得.
    this.$el = $(el);

    // エラー表示用のリストを取得.
    this.$list = this.$el.next().children();

    // エレメントのdata属性の値を取得.
    var obj = this.$el.data();

    // エレメントにrequired属性がついているか判定
    if (this.$el.prop("required")) {
      obj["required"] = "";
    }

    // Modelを作成し、Viewのプロパティとする.
    this.model = new AppModel(obj);
  };

  AppView.prototype.handleEvents = function(){
    var self = this;

    // DomのKeyupとViewのイベントを関連付ける
    this.$el.on("keyup", function(e) {
      self.onKeyUp(e);
    });

    // ModelとViewのイベントを関連付ける
    this.model.on("valid", function(){
      self.onValid();
    });

    this.model.on("invalid", function(){
      self.onInValid();
    });
  };

  AppView.prototype.onKeyUp = function(e){
    var $target = $(e.currentTarget);
    this.model.set($target.val());
  };

  AppView.prototype.onValid = function() {
    this.$el.removeClass("error");
    this.$list.hide();
  };

  AppView.prototype.onInValid = function() {
    var self = this;
    this.$el.addClass("error");
    this.$list.hide();

    $.each(this.model.errors, function(index, val) {
      self.$list.filter("[data-error=\"" + val + "\"]").show();
    });
  };

  return AppView;
})();

