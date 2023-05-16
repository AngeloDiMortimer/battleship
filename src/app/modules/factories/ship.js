import { SHIP_LENGTHS } from "../helpers/helpers";

const Ship = (type) => {
    //properties
    const id = type; //input sent from function call. IE: "destroyer"
    const length = SHIP_LENGTHS[type]; //IE: "Battleship: 4"
    let direction = "horizontal";

    const getDirection = () => direction;
    const changeDirection = () => { //changes the direction of ships from horizontal to vertical
        direction === "horizontal"
        ? (direction = "vertical")
        : (direction = "horizontal");
    };

    //hits (i)
    const hits = Array(length).fill(null); //creates new hit array depending of the length of the ship
    const hit =  (i) => (hits[i] = "hit"); //changes ship's hits array index from null to hit
    const getHits = () => hits; //displays state of hits array,

    //isSunk
    const isSunk = () => hits.every((h) => h === "hit"); //checks if ship is sunk, if all elements are "hit" return true

    return {id, length, hit, getHits, isSunk, getDirection, changeDirection};
};

export default Ship;