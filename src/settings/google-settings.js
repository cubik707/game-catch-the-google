export class GoogleSettings {
    #googleJumpInterval;

    constructor(googleJumpInterval) {
        this.#googleJumpInterval = googleJumpInterval;
    }

    set googleJumpInterval(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('Google jump interval must be a positive integer');
        }
        this.#googleJumpInterval = value;
    }

    get googleJumpInterval() {
        return this.#googleJumpInterval;
    }
}