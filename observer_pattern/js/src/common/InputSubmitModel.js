import ObserverModel from "./ObserverModel"

/**
 * Modelの作成
 */
export default class InputSubmitModel extends ObserverModel {

  constructor(attrs) {

    super();

    // Validateの定義
    this.attrs = (attrs === void 0) ? {} : attrs;

    // Observerの機構を実装.
    this.listeners["valid"] = [];
    this.listeners["invalid"] = [];
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
    let isErr = (this.errors.length);

    this.trigger(!isErr ? "valid" : "invalid");
  };

}
