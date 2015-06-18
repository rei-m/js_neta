/**
 * Modelの作成
 */
export default class ObserverModel {

  constructor() {

    // Observerの機構を実装.
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
