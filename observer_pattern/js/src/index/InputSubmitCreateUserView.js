import InputSubmitView from '../common/InputSubmitView'

export default class InputSubmitCreateUserView extends InputSubmitView {

  constructor(el, $inputTextId, $inputTextPass) {
    super(el);

    this.inputTextIdModel = $inputTextId.model;

    this.inputTextPassModel = $inputTextPass.model;

    this.handleEvents();
  }

  handleEvents() {
    this.inputTextIdModel.on('valid', () => {
      this.onParameterChange();
    });

    this.inputTextIdModel.on('invalid', () => {
      this.onParameterChange();
    });

    this.inputTextPassModel.on('valid', () => {
      this.onParameterChange();
    });

    this.inputTextPassModel.on('invalid', () => {
      this.onParameterChange();
    });
  }

  onParameterChange(){
    let isAllValid = (this.inputTextIdModel.isValid && this.inputTextPassModel.isValid);
    this.$el.prop('disabled', !isAllValid);
  }

  onClick(e) {

    // デフォルトの動作はキャンセル.
    e.preventDefault();
    e.stopPropagation();

    if(this.inputTextIdModel.isValid && this.inputTextPassModel.isValid){
      alert('submitしてOK！');
    }
  }
}
