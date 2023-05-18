import Player from "../factories/player";
import Gameboard from "../factories/gameboard";

// Setup
const player = Player('human');
const enemy = Player('computer');
const playerBoard = Gameboard();
const enemyBoard = Gameboard();

describe('Player type', () => {
    test('human type', () => {
        const actual = player.getType();
        expect(actual).toBe('human');
    });

    test('computer type', () => {
        const actual = enemy.getType();
        expect(actual).toBe('computer');
    });
});