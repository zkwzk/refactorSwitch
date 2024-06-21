import { FeeCalculator } from "../feeCalculator";

describe('feeCalculator', () => {
    const feeCalculator = new FeeCalculator
    it('should calculate the car fee correctly', () => {
        const fee = feeCalculator.calculateFee('car');
        expect(fee).toBe(5);
    });

    it('should calculate the truck fee correctly', () => {
        const fee = feeCalculator.calculateFee('truck');
        expect(fee).toBe(10);
    });

    it('should calculate the motorcycle fee correctly', () => {
        const fee = feeCalculator.calculateFee('motorcycle');
        expect(fee).toBe(2);
    });

    it('should return 0 for unknown vehicle type', () => {
        const fee = feeCalculator.calculateFee('unknown');
        expect(fee).toBe(0);
    });
});

