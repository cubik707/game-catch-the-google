export class Game {
    #status;
    #googlePosition;
    #settings;

    constructor() {
        this.#status = "PENDING"
        this.#settings = {
            gridSize: {
                columnsCount: 1,
                rowsCount: 2
            },
            jumpInterval: 10
        }
    }
    async start(){
        this.#status = "IN-PROGRESS"

        setTimeout(()=>{
            this.#status = "LOSE"
        }, 3000)
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