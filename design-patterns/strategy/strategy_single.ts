class Car {
    private readonly brakeBehavior;

    constructor(brakeBehavior: BrakeBehavior) {
        if (brakeBehavior == null) throw new Error('Brake behavior cannot be null');

        this.brakeBehavior = brakeBehavior;
    }

    applyBrakes() {
        this.brakeBehavior.apply();
    }
}

interface BrakeBehavior {
    apply(): void;
}

class ABSBrakeBehavior implements BrakeBehavior {
    apply(): void {
        console.log('Applying ABS brakes...');
    }
}

class StandardBrakeBehavior implements BrakeBehavior {
    apply(): void {
        console.log('Applying standard brakes...');
    }
}

let myCar = new Car(new ABSBrakeBehavior());
myCar.applyBrakes();

myCar = new Car(new StandardBrakeBehavior());
myCar.applyBrakes();
