export class FeeCalculator {
    calculateFee(type: string) : number {
        let fee = 0;
        switch (type) {
            case 'car': fee = 5; break;
            case 'truck': fee = 10; break;
            case 'motorcycle': fee = 2; break;
            default: fee = 0;
        }

        return fee;
    }
}