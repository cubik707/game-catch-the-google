export class GridSetting {
    #columnsCount;
    #rowsCount;

    constructor(columnsCount, rowsCount) {
        this.#columnsCount = columnsCount;
        this.#rowsCount = rowsCount;
    }

    get columnsCount() {
        return this.#columnsCount;
    }

    get rowsCount() {
        return this.#rowsCount;
    }
}