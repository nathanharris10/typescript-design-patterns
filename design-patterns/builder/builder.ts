interface Car {
    make: string;
    model: string;
    color: string;
    vin: string;
}

class CarBuilder {
    private readonly car: Car;

    constructor(make: string, model: string) {
        if (make == null) throw Error('Make cannot be null.');
        if (model == null) throw Error('Model cannot be null.');

        this.car = {
            make: make,
            model: model,
            color: '',
            vin: '',
        };
    }

    color(color: string): CarBuilder {
        if (color == null) throw Error('Color cannot be null.');
        this.car.color = color;
        return this;
    }

    vin(vin: string): CarBuilder {
        if (vin == null) throw Error('Vin cannot be null.');
        this.car.vin = vin;
        return this;
    }

    build(): Car {
        return this.car;
    }
}

let myCar = new CarBuilder('Honda', 'Accord').build();
console.log(`myCar: ${JSON.stringify(myCar)}\n`);

myCar = new CarBuilder('Chevrolet', 'Silverado').color('Blue').build();
console.log(`myCar: ${JSON.stringify(myCar)}\n`);

myCar = new CarBuilder('Toyota', 'Camry').vin('WMWXS5C56FT892627').build();
console.log(`myCar: ${JSON.stringify(myCar)}\n`);

const myCarBuilder = new CarBuilder('Toyota', 'Camry');
console.log(`myCarBuilder: ${JSON.stringify(myCarBuilder)}`);

console.log(`Retrieving VIN from repo....`);
myCarBuilder.vin('5NPE34AB4FH138219');
console.log(`myCarBuilder: ${JSON.stringify(myCarBuilder)}`);

console.log('Retrieving Color from API....');
myCarBuilder.color('Red');
console.log(`myCarBuilder: ${JSON.stringify(myCarBuilder)}`);

console.log(`myCar: ${JSON.stringify(myCarBuilder.build())}`);
