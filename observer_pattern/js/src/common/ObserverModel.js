
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
