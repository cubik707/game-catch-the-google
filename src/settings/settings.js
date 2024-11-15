import {GridSetting} from "./grid-settings.js";
import {GoogleSettings} from "./google-settings.js";

export class Settings {
    #gridSetting;
    #googleSettings;

    constructor(columnsCount = 4, rowsCount = 4, googleJumpInterval = 1000) {
        this.#gridSetting = new GridSetting(columnsCount, rowsCount);
        this.#googleSettings = new GoogleSettings(googleJumpInterval);
    }

    get gridSetting() {
        return this.#gridSetting;
    }

    get googleSettings() {
        return this.#googleSettings;
    }
}