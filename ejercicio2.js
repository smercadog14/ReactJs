let Observer = require("./Observer");

class Parking extends Observer {
  constructor() {
    super();
    this.license = "";
    this.inCar = false;
  }

  getIn(license) {
    this.inCar = true;
    this.notifyObsevable(this);
  }

  getOut(license) {
    this.inCar = false;
    this.notifyObsevable(this);
  }
}

class myCar {
  notify(element) {
    console.log(`Car: ${element.inCar}`);
  }
}

let carObserver = new Parking();

let car1 = new myCar();

carObserver.subscribe(car1);

carObserver.getIn("abc-123");
