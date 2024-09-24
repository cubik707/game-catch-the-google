import {NumberUtility} from "./number-utility.js";

describe('NumberUtility', () => {
    let numberUtility;

    beforeEach(() => {
        numberUtility = new NumberUtility();
    });

    test('should return a number between min and max (inclusive)', async () => {
        for (let i = 0; i < 100; i++) {
            const min = 1;
            const max = 3;
            const randomNumber = await numberUtility.getRandomNumber(min, max);
            expect(randomNumber).toBeGreaterThanOrEqual(min);
            expect(randomNumber).toBeLessThanOrEqual(max);
        }
    });

    test('should return the same value when min equals max', async () => {
        const min = 5;
        const max = 5;
        const randomNumber = await numberUtility.getRandomNumber(min, max);
        expect(randomNumber).toBe(min);
    });

    test('should handle negative numbers correctly', async () => {
        const min = -10;
        const max = -5;
        const randomNumber = await numberUtility.getRandomNumber(min, max);
        expect(randomNumber).toBeGreaterThanOrEqual(min);
        expect(randomNumber).toBeLessThanOrEqual(max);
    });
});
