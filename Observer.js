class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(notifyingClass) {
    this.observers.push(notifyingClass);
  }

  unsubscribe(notifyingClass) {
    this.observers = this.observers.filter(
      (observer) => observer !== notifyingClass
    );
  }

  notifyObsevable(model) {
    this.observers.forEach((observer) => {
      observer.notify(model);
    });
  }
}

module.exports = Observable;
