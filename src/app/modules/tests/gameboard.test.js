//test for gameboard factory

import Gameboard from '../factories/gameboard';
import Ship from '../factories/ship';

describe('Gameboard', () => {
    describe('board', () => {
        const gameboard = Gameboard();

        test('empty board', () => {
            const actual = gameboard.getBoard().every((square) => square === null);
            const expected = false;
            expect(actual).toBe(expected);
        });

        test('board row', () => {
            const actual = gameboard.getBoard().length;
            const expected = 10;
            expect(actual).toBe(expected);
        });

        test('board column', () => {
            const actual = gameboard.getBoard()[0].length;
            const expected = 10;
            expect(actual).toBe(expected);
        });
    });

    describe('place horizontal ship', () => {
        const gameboard = Gameboard();
        const ship = Ship('cruiser');
        gameboard.placeShip(ship, 3, 2);

        test('placed ship at started coord w/index: 0', () => {
            const actual = gameboard.getBoard()[3][2];
            expect(actual).toEqual({ship, index: 0});
        });

        test('placed ship at coord w/index: 1', () => {
            const actual = gameboard.getBoard()[3][3];
            expect(actual).toEqual({ship, index: 1});
        });

        test('placed ship at coord w/index: 2', () => {
            const actual = gameboard.getBoard()[3][4];
            expect(actual).toEqual({ship, index: 2});
        });
    });

    describe('place vertical ship', () => {
        const gameboard = Gameboard();
        const ship = Ship('submarine');
        ship.changeDirection();
        gameboard.placeShip(ship, 3, 2);

        test('placed ship at starter coord w/index: 0', () => {
            const actual = gameboard.getBoard()[3][2];
            expect(actual).toEqual({ship, index: 0});
        });

        test('placed ship at starter coord w/index: 1', () => {
            const actual = gameboard.getBoard()[4][2];
            expect(actual).toEqual({ship, index: 1});
        });

        test('placed ship at starter coord w/index: 2', () => {
            const actual = gameboard.getBoard()[5][2];
            expect(actual).toEqual({ship, index: 2});
        });

    });

    describe('Not place out of bounds ship', () => {
        const gameboard = Gameboard();
        const carrier = Ship('carrier');

        test('out-of-bounds ship horizontal', () => {
            gameboard.placeShip(carrier, 7, 7); //[7,7] [7,8] [7,9] [7,10] [7,11]
            const actual = gameboard.getBoard()[7][7];
            expect(actual).toEqual(null);
        });

        test('out-of-bounds ship vertical', () => {
            carrier.changeDirection();
            gameboard.placeShip(carrier, 7, 7); //[7,7] [8,7] [9,7] [10,7] [11,7]
            const actual = gameboard.getBoard()[7][7];
            expect(actual).toEqual(null);
        });
    });

    describe('Not place if collision with ship', () => {
        const gameboard = Gameboard();
        const carrier = Ship('carrier');
        const battleship = Ship('battleship');

        test('collision w/ship', () => {
            gameboard.placeShip(carrier, 2, 0); //[2,0] [2,1] [2,2] [2,3] [2,4]
            gameboard.placeShip(battleship, 2, 0); //[2,0] [2,1] [2,2] [2,3]
            const actual = gameboard.getBoard()[2][0];
            expect(actual).toEqual({ship: carrier, index: 0});
        });

        test('collision w/ship 1 place', () => {
            battleship.changeDirection();
            gameboard.placeShip(battleship, 0, 2); //[0,2] [1,2] [2,2] [3,2]
            const actual = gameboard.getBoard()[0][2];
            expect(actual).toEqual(null);
        });
    });

    describe('All ships placed', () => {
        const gameboard = Gameboard();
        const carrier = Ship('carrier');
        const battleship = Ship('battleship');
        const cruiser = Ship('cruiser');
        const submarine = Ship('submarine');
        const destroyer = Ship('destroyer');

        test('no ships placed', () => {
            const actual = gameboard.areAllShipsPlaced();
            expect(actual).toBe(false);
        });

        test('some ships placed', () => {
            gameboard.placeShip(carrier, 0, 0);
            gameboard.placeShip(battleship, 1, 0);
            const actual = gameboard.areAllShipsPlaced();
            expect(actual).toBe(false);
        });

        test('Placed all ships', () => {
            gameboard.placeShip(cruiser, 2, 0);
            gameboard.placeShip(submarine, 3, 0);
            gameboard.placeShip(destroyer, 4, 0);
            const actual = gameboard.areAllShipsPlaced();
            expect(actual).toBe(true);
        });
    });

});