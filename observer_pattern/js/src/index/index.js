import InputTextView from '../common/InputTextView'
import InputSubmitCreateUserView from './InputSubmitCreateUserView'

$(() => {

  let $inputTextId = new InputTextView($('#input-text-id'));

  let $inputTextPass = new InputTextView($('#input-text-password'));

  new InputSubmitCreateUserView('#submit', $inputTextId, $inputTextPass);

});
