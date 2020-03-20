abstract class Car {
  abstract description: string;
  abstract cost: number;

  public getDescription(): string {
    return this.description;
  }

  public getCost(): number {
    return this.cost;
  }
}

class ModelX extends Car {
  cost = 84990;
  description = "Model X";
}

class ModelS extends Car {
  cost = 79990;
  description = "Model S";
}

abstract class CarOptions extends Car {
  abstract decoratedCar: Car;

  public abstract getDescription(): string;
  public abstract getCost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  decoratedCar: Car;
  description = ", Enhanced Auto Pilot";
  cost = 3500;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + this.description;
  }
  public getCost(): number {
    return this.decoratedCar.getCost() + this.cost;
  }
}

class DualMotor extends CarOptions {
  decoratedCar: Car;
  description = ", Dual Motor";
  cost = 5000;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + this.description;
  }
  public getCost(): number {
    return this.decoratedCar.getCost() + this.cost;
  }
}

class HeatedSeats extends CarOptions {
  decoratedCar: Car;
  description = ", Heated Seats";
  cost = 1250;

  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + this.description;
  }
  public getCost(): number {
    return this.decoratedCar.getCost() + this.cost;
  }
}

const log = (car: Car) => {
  console.log(`Car -> Description: ${car.getDescription()}, Cost: ${car.getCost()}`);
};

let myCar = new ModelS();
log(myCar);

console.log('\nAdding Enhanced Auto Pilot Option...');
myCar = new EnhancedAutoPilot(myCar);
log(myCar);

console.log('\nAdding Dual Motor Option...');
myCar = new DualMotor(myCar);
log(myCar);

console.log('\nAdding Heated Seats Option...');
myCar = new HeatedSeats(myCar);
log(myCar);