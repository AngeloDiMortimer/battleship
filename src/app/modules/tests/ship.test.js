//test for ship factory

import Ship from '../factories/ship';

describe('Ship Factory', () => {
    describe('Properties', () => {
        const ship = Ship('battleship');
        test('id', () => {
            expect(ship.id).toBe('battleship');
        });

        test('length', () => {
            expect(ship.length).toBe(4);
        });

        test('direction', () => {
            expect(ship.getDirection()).toBe('horizontal');
        });

        test('change direction', () => {
            ship.changeDirection();
            expect(ship.getDirection()).toBe('vertical');
        });
    });
});