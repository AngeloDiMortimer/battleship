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

    describe('Hit function', () => {
        const ship = Ship('submarine');
       
        test('no hits', () => {
            expect(ship.getHits()).toEqual([null, null, null]);
        });
       
        test('one hit', () => {
            ship.hit(2);
            expect(ship.getHits()).toEqual([null, null, 'hit']);
        });
    });
    
    describe('isSunk function', () => {
        const ship = Ship('destroyer');
        test('not sunk', () => {
            expect(ship.isSunk()).toBe(false);
        });

        test('hit but not sunk yet', () => {
            ship.hit(0);
            expect(ship.isSunk()).toBe(false);
        });

        test('ship is sunk', () => {
            ship.hit(1);
            expect(ship.isSunk()).toBe(true);
        });
    });
});

