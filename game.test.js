import {Game} from "./game.js";
import {GameStatuses} from "./GAME_STATUSES.js";

describe('game', () => {
    it('should have Pending status after creating', () => {
        const game = new Game()
        expect(game.status).toBe(GameStatuses.PENDING)
    })

    it('should have InProgress status after start', () => {
        const game = new Game()
        game.start()
        expect(game.status).toBe(GameStatuses.IN_PROGRESS)
    })
    it('google should be in the Grid after start', () => {
        const game = new Game()
        game.start()
        expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount)
        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount)
        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)
    })
    it('google should be in the Grid but in new position after jump', async () => {
        const game = new Game()
        game.googleJumpInterval = 1;
        game.start() // jump -> webAPI/browser 10

        for (let i = 0; i < 100; i++) {
            const prevGooglePosition = game.googlePosition;
            await delay(1) // await -> webAPI/browser 10 // after 10 ms: macrotasks: [jump, await]
            const currentGooglePosition = game.googlePosition;
            expect(prevGooglePosition).not.toEqual(currentGooglePosition)
        }
    })
})

const delay = (ms) => new Promise(res => setTimeout(res, ms))