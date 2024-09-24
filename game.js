export class Game {
    #status;

    constructor() {
        this.#status = "PENDING"
    }
    async start(){
        this.#status = "IN-PROGRESS"
    }

    async getStatus(){
        return this.#status
    }
}