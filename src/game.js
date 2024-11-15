// Game.js
import { GameStatuses } from "./GAME_STATUSES.js";
import { SamuraiNumberUtility } from "./utils/samurai-number-utility.js";
import { Position } from "./position/position.js";
import { Settings } from "./settings/settings.js";

export class Game {
    #settings;
    #status = GameStatuses.PENDING;
    #googlePosition = null;
    #numberUtility;

    constructor() {
        this.#settings = new Settings();
        this.#numberUtility = new SamuraiNumberUtility();
    }

    set googleJumpInterval(value) {
        this.#settings.googleSettings.googleJumpInterval = value;
    }

    get status() {
        return this.#status;
    }

    get googlePosition() {
        return this.#googlePosition;
    }

    get gridSize() {
        return this.#settings.gridSetting;
    }

    start() {
        this.#status = GameStatuses.IN_PROGRESS;
        this.#jumpGoogle();
        setInterval(() => { //todo: #googleEscaped
            this.#jumpGoogle();
        }, this.#settings.googleSettings.googleJumpInterval);
    }

    #jumpGoogle() {
        const newPosition = new Position(
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSetting.columnsCount),
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSetting.rowsCount)
        );
        if (this.#googlePosition && this.#googlePosition.equals(newPosition)) {
            this.#jumpGoogle();
            return;
        }
        this.#googlePosition = newPosition;
    }
}
