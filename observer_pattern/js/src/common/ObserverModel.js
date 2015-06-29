// Observerを表現するためのModel.
// onでeventを登録し、triggerで登録したイベントを実行する.
export default class ObserverModel {

  constructor() {
    this.listeners = {};
  }

  on(event, func) {
    this.listeners[event].push(func);
  }

  trigger(event) {
    this.listeners[event].map((func) => {
      func();
    });
  }
}
