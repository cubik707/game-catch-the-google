import {Game} from "./game";

describe("Game", () => {
    it("should return Pending status as initial", async () => {
        const game = new Game();
        let status = await game.getStatus()
        expect(status).toBe("PENDING")
    })
})

