import {GameStatuses} from "./GAME_STATUSES.js";
import {SamuraiNumberUtility} from "./samurai-number-utility.js";

export class Game {
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        },
        googleJumpInterval: 1000
    }
    #status = GameStatuses.PENDING

    #googlePosition = null
    /**
     * @type SamuraiNumberUtility // JSDoc
     */
    #numberUtility;

    constructor() {
        this.#numberUtility = new SamuraiNumberUtility()

    }

    set googleJumpInterval(value) {
        if (!Number.isInteger(value) || value <= 0) {
            throw new Error('Google jump interval must be a positive integer')
        }
        this.#settings.googleJumpInterval = value
    }

    get status() {
        return this.#status
    }

    get googlePosition() {
        return this.#googlePosition
    }

    get gridSize() {
        return this.#settings.gridSize
    }

    start() {
        this.#status = GameStatuses.IN_PROGRESS
        this.#jumpGoogle()
        setInterval(() => { //todo: #googleEscaped
            this.#jumpGoogle()
        }, this.#settings.googleJumpInterval)
    }
    #jumpGoogle() {
        const newPosition = {
            x: this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount),
            y: this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount)
        }
        if (newPosition.x === this.googlePosition?.x && newPosition.y === this.googlePosition?.y){
            this.#jumpGoogle()
            return;
        }
        this.#googlePosition = newPosition
    }
}

