import { Position } from './Position';


describe("Position class", () => {
    test("should initialize with valid x and y and support getters", () => {
        const position = new Position(2, 3);
        expect(position.x).toBe(2);
        expect(position.y).toBe(3);
    });

    test("should throw errors for invalid x and y during initialization or when setting", () => {
        // Invalid initialization
        expect(() => new Position(-1, 2)).toThrow("x must be a non-negative integer");
        expect(() => new Position(2, -1)).toThrow("y must be a non-negative integer");
        expect(() => new Position(1.5, 2)).toThrow("x must be a non-negative integer");
        expect(() => new Position(2, 1.5)).toThrow("y must be a non-negative integer");

        // Invalid setters
        const position = new Position(2, 3);
        expect(() => {
            position.x = -5;
        }).toThrow("x must be a non-negative integer");
        expect(() => {
            position.y = 4.7;
        }).toThrow("y must be a non-negative integer");
    });

    test("should correctly update x and y with valid values using setters", () => {
        const position = new Position(2, 3);
        position.x = 10;
        position.y = 8;
        expect(position.x).toBe(10);
        expect(position.y).toBe(8);
    });

    test("equals method should correctly compare positions", () => {
        const pos1 = new Position(4, 5);
        const pos2 = new Position(4, 5);
        const pos3 = new Position(4, 6);
        expect(pos1.equals(pos2)).toBe(true);
        expect(pos1.equals(pos3)).toBe(false);
        expect(pos1.equals({ x: 4, y: 5 })).toBe(false);
    });
});
