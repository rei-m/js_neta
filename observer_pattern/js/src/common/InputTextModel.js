import ObserverModel from './ObserverModel'

export default class InputTextModel extends ObserverModel {

  constructor(attrs) {

    super();

    this.val = '';

    this.isValid = false;

    // Validateの定義
    this.attrs = (attrs === void 0) ? {} : attrs;

    // Observerの機構を実装.
    this.listeners['valid'] = [];
    this.listeners['invalid'] = [];
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

    this.isValid = (this.errors.length === 0);

    this.trigger(this.isValid ? 'valid' : 'invalid');
  };

  // 必須チェック
  required() {
    return this.val !== '';
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
