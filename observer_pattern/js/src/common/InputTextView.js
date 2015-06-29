
import InputTextModel from './InputTextModel'

/**
 * Viewの作成
 */
export default class InputTextView {

  constructor(el) {

    // エレメントを取得.
    this.$el = $(el);

    // エレメントのdata属性の値を取得.
    let elData = this.$el.data();

    // エラー表示用のリストを作成.
    let $errors = $('<ul>').addClass('input-error__list');

    // チェック仕様に従い、エラー情報を作成.
    if (this.$el.attr('required')) {
      elData['required'] = '';
      $errors.append($('<li>').attr('data-error', 'required').text('必須項目です'));
    }

    if (this.$el.attr('data-minlength')) {
      let $li = $('<li>')
                  .attr('data-error', 'minlength')
                  .text(`${this.$el.data('minlength')}文字以上で入力してください`);
      $errors.append($li);
    }

    if (this.$el.attr('data-maxlength')) {
      let $li = $('<li>')
                  .attr('data-error', 'maxlength')
                  .text(`${this.$el.data('maxlength')}文字以内で入力してください`);
      $errors.append($li);
    }

    if (0 < $errors.children().length) {
      let $wrap = $('<span>').addClass('input-wrap')
      this.$el.wrap($wrap).after($errors);
    }

    this.$list = $errors.children();
    this.$list.parent().hide();

    // Modelを作成し、Viewのプロパティとする.
    this.model = new InputTextModel(elData);

    // Eventを登録する.
    this.handleBaseEvents();
  }

  handleBaseEvents() {
    let self = this;

    // DomのKeyupとViewのイベントを関連付ける
    this.$el.on('keyup', (e) => {
      self.onKeyUp(e);
    });

    // ModelとViewのイベントを関連付ける
    this.model.on('valid', () => {
      self.onValid();
    });

    this.model.on('invalid', () => {
      self.onInValid();
    });
  }

  onKeyUp(e) {
    let $target = $(e.currentTarget);
    this.model.set($target.val());
  }

  onValid() {
    this.$el.removeClass('error');
    this.$list.parent().hide();
    this.$list.hide();
  }

  onInValid() {
    this.$el.addClass('error');
    this.$list.hide();
    this.model.errors.map((val) => {
      this.$list.filter(`[data-error="${val}"]`).show();
    });
    this.$list.parent().show();
  }
}
