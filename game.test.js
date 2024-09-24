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

    it("google should have random correct position after start", async () => {
        await game.setSettings({
            gridSize: {
                rowsCount: 3,
                columnsCount: 4 // x
            }
        })

        await game.start()
        let googlePosition = await game.getGooglePosition()
        expect(googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(googlePosition.x).toBeLessThanOrEqual(3)

        expect(googlePosition.y).toBeGreaterThanOrEqual(0)
        expect(googlePosition.y).toBeLessThanOrEqual(2)
    })
})

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

