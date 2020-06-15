interface Observable {
  registerObserver(observer: Observer);
  removeObserver(observer: Observer);
  notifyObservers();
}

interface Observer {
  update(speed: number);
}

class Car implements Observable {
  private speed: number;
  private rpm: number;
  private observers: Array<Observer> = new Array<Observer>();

  constructor() {
    this.speed = 0;
  }

  setSpeed(speed: number) {
    if (this.speed < speed) {
      console.log(`\nCar: speeding up to ${speed}`);
    } else {
      console.log(`\nCar: slowing down to ${speed}`);
    }
    this.speed = speed;
    this.notifyObservers();
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer) {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.speed));
  }
}

class Speedometer implements Observer {
  private observedCar: Car;

  constructor(car: Car) {
    this.observedCar = car;
    car.registerObserver(this);
  }

  update(speed: number) {
    this.display(speed);
  }

  display(speed: number) {
    console.log(`Speedometer: current speed is ${speed}`);
  }
}

class SpeedLimiter implements Observer {
  private observedCar: Car;
  private speedLimit: number = 50;

  constructor(car: Car) {
    this.observedCar = car;
    car.registerObserver(this);
  }

  update(speed: number) {
    if (this.speedLimit < speed) {
      console.log(`SpeedLimiter: limiting speed to ${this.speedLimit}`);
      this.observedCar.setSpeed(this.speedLimit);
    } else {
      console.log(`SpeedLimiter: all is fine.`);
    }
  }
}

const myCar = new Car();
const mySpeedometer = new Speedometer(myCar);
const mySpeedLimiter = new SpeedLimiter(myCar);

myCar.setSpeed(35);
myCar.setSpeed(45);
myCar.setSpeed(55);

console.log('\nRemoving speed limiter cause I want to go faster!!');
myCar.removeObserver(mySpeedLimiter);
myCar.setSpeed(60);