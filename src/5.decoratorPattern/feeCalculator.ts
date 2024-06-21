export abstract class Vehicle {
    abstract getFee(): number;
    abstract getType(): string;
}

export class Car extends Vehicle {
    getFee(): number {
        return 5;
    }

    getType(): string {
        return 'car';
    }
}

export class Truck extends Vehicle {
    getFee(): number {
        return 10;
    }

    getType(): string {
        return 'truck';
    }
}

export class Motorcycle extends Vehicle {
    getFee(): number {
        return 2;
    }

    getType(): string {
        return 'motorcycle';
    }
}

export class FeeCalculator {
    vehicles: Vehicle[] = [ new Car(), new Truck(), new Motorcycle() ];
    calculateFee(type: string): number {
        for(const vehicle of this.vehicles) {
            if(vehicle.getType() === type) {
                return vehicle.getFee();
            }
        }

        return 0;
    }
}