import {Game} from "./game";

describe("Game", () => {
    let game;

    beforeEach(()=>{
        game = new Game()
    })

    it("should return Pending status as initial", async () => {
        let status = await game.getStatus()
        expect(status).toBe("PENDING")
    })

    it("should return In-progress status after start", async () => {
        await game.start()
        let status = await game.getStatus()
        expect(status).toBe("IN-PROGRESS")
    })

    it("should lose after 3 seconds", async () => {
        await game.start()
        await delay(3000)
        let status = await game.getStatus()
        expect(status).toBe("LOSE")
    })
})

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

