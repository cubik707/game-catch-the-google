export class Position {
    #x;
    #y;

    constructor(x, y) {
        if (!Number.isInteger(x) || x < 0) {
            throw new Error("x must be a non-negative integer");
        }
        if (!Number.isInteger(y) || y < 0) {
            throw new Error("y must be a non-negative integer");
        }
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set x(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("x must be a non-negative integer");
        }
        this.#x = value;
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error("y must be a non-negative integer");
        }
        this.#y = value;
    }

    equals(otherPosition) {
        return otherPosition instanceof Position &&
            this.#x === otherPosition.x &&
            this.#y === otherPosition.y;
    }
}
