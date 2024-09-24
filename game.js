export class Game {
    #status;
    start(){
        this.#status = "IN-PROGRESS"
    }

    async getStatus(){
        return this.#status
    }
}