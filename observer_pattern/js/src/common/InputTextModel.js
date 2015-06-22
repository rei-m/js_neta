import ObserverModel from "./ObserverModel"

/**
 * Modelの作成
 */
export default class InputTextModel extends ObserverModel {

  constructor(attrs) {

    super();

    this.val = "";

    // Validateの定義
    this.attrs = (attrs === void 0) ? {} : attrs;

    // Observerの機構を実装.
    this.listeners["valid"] = [];
    this.listeners["invalid"] = [];
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
      console.log(this.attrs);
      console.log(val);
      if (!this[key](val)) this.errors.push(key);
    }

    // Validationの結果に応じた処理を実行
    let isErr = (this.errors.length);

    this.trigger(!isErr ? "valid" : "invalid");
  };


}
