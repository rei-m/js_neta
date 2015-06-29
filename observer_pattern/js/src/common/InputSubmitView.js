
import InputSubmitModel from './InputSubmitModel'

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
    this.model = new InputSubmitModel(elData);

    // Eventを登録する.
    this.handleBaseEvents();
  }

  handleBaseEvents() {

    let self = this;

    this.$el.on('click', (e) => {
      self.onClick(e);
    });
  }

  onClick(e) {

  }
}
