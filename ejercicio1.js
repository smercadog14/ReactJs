let Observer = require("./Observer");

class MicroController extends Observer {
  constructor() {
    super();
    this.name = "";
    this.code = "";
    this.order = false;
  }

  turnON(name, code) {
    if (name == "ultraS" && code == 10) {
      this.order = true;
    }
    this.notifyObsevable(this);
  }

  turnOFF(name, code) {
    if (name == "ultraS" && code == 10) {
      this.order = false;
    }
    this.notifyObsevable(this);
  }
}

class microTry {
  notify(element) {
    console.log(`Controlador: ${element.order}`);
  }
}

let microObserver = new MicroController();

let micro1 = new microTry();

microObserver.subscribe(micro1);

microObserver.turnON("ultraS", 10);
