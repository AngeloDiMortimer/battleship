import { randCoords, SHIP_TYPES } from "../helpers/helpers";

const Gameboard = () => {
    //create a board 10x10, coordinates board [row][col]

    let board = Array(10).fill(null).map(() => Array(10).fill(null)); //creates array of 10 elements and fills each element with 10 nulls
    const getBoard = () => board;

    let placedShips = [];
    const areAllShipsPlaced = () => placedShips.length === SHIP_TYPES.length;

    const adjustCoords = (y0, x0, i, direction) => { //adjust coordinates depending on how much space they will take
        //default - horizontal
        let x = x0 + i;
        let y = y0;
        if(direction === 'vertical') {
            x = x0;
            y = y0 + i;
        }
        return [y, x];
    };


    //place ship at coords (y, x)
    const placeShip = (ship, y0, x0) => {
        const direction = ship.getDirection();
        //checks if out-of-bounds/collision
        const valid = checkValid(ship.length, direction, y0, x0);
        if (valid) {
            for (let i = 0; i < ship.length; i++) {
                const [y, x] = adjustCoords(y0, x0, i, direction);
                //places ship w/index
                board[y][x] = {ship, index: i};
            };
            //adds it to placedShips array
            placedShips.push(ship);
            console.log("placeShip results: ", placedShips);
            return valid;
        } else {
            return valid;
        }
    };

    const checkValid = (length, direction, y0, x0) => {
        const cells = [];
        for (let i = 0; i < length; i++) {
            const [y, x] = adjustCoords(y0, x0, i, direction);
            //checks that y/x are in-bounds
            if (y < 10 && x < 10) {
                cells.push(board[y][x]);
            } else {
                return false;
            }
        }
        console.log("check valid results: ", cells);
        return cells.every((cell) => cell === null);
    };


    return {
        getBoard,
        placeShip,
        areAllShipsPlaced
    };
};

export default Gameboard;