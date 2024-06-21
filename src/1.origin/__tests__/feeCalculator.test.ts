import { FeeCalculator } from "../feeCalculator";

describe('feeCalculator', () => {
    const feeCalculator = new FeeCalculator
    it('should calculate the car as 5', () => {
        const fee = feeCalculator.calculateFee('car');
        expect(fee).toBe(5);
    });
});

