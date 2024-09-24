export class Game {
    #status;
    #googlePosition;
    #settings;
    #numberUtility;

    constructor(numberUtils) {
        this.#status = "PENDING"
        this.#settings = {
            gridSize: {
                columnsCount: 3,
                rowsCount: 3
            },
            jumpInterval: 10
        }
        this.#numberUtility = numberUtils;
    }
    async start(){
        this.#status = "IN-PROGRESS"

        setTimeout(()=>{
            this.#status = "LOSE"
        }, 3000)

        this.#googlePosition = {
            x: await this.#numberUtility.getRandomNumber(0, this.#settings.gridSize.columnsCount - 1),
            y: await this.#numberUtility.getRandomNumber(0, this.#settings.gridSize.rowsCount - 1),
        };
    }

    async getStatus(){
        return this.#status
    }

    async getGooglePosition(){
        return this.#googlePosition;
    }

    async setSettings(settings){
        this.#settings = settings
    }
}