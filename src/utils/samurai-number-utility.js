/**
 * Utility class for generating random numbers.
 */
export class SamuraiNumberUtility {
    /**
     * Generates a random integer between the specified range.
     *
     * @param {number} fromInclusive - The lower bound of the range (inclusive).
     * @param {number} toExclusive - The upper bound of the range (exclusive).
     * @returns {number} A random integer between fromInclusive (inclusive) and toExclusive (exclusive).
     * @throws {Error} Throws an error if fromInclusive is not less than toExclusive.
     */
    getRandomInteger(fromInclusive, toExclusive) {
        // invariant checking
        if (fromInclusive >= toExclusive) throw new Error('From must be less then To')

        return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive;
    }
}
