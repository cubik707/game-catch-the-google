export class Game {
    #status;

    constructor() {
        this.#status = "PENDING"
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
}