import { FeeCalculator } from "../feeCalculator";

describe('feeCalculator', () => {
    const feeCalculator = new FeeCalculator
    it('should calculate the car fee correctly', () => {
        const fee = feeCalculator.calculateFee('car', 0.8);
        expect(fee).toBe(4);
    });

    it('should calculate the truck fee correctly', () => {
        const fee = feeCalculator.calculateFee('truck', 0.7);
        expect(fee).toBe(7);
    });

    it('should calculate the motorcycle fee correctly', () => {
        const fee = feeCalculator.calculateFee('motorcycle', 0.9);
        expect(fee).toBe(1.8);
    });

    it('should return 0 for unknown vehicle type', () => {
        const fee = feeCalculator.calculateFee('unknown', 0.8);
        expect(fee).toBe(0);
    });
});

