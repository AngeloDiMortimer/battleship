import { SHIP_LENGTHS } from "../helpers/helpers";

const Ship = (type) => {
    const id = type; //input sent from function call. IE: "destroyer"
    const length = SHIP_LENGTHS[type]; //IE: "Battleship: 4"
    let direction = "horizontal";

    const getDirection = () => direction;
    const changeDirection = () => { //changes the direction of ships from horizontal to vertical
        direction === "horizontal"
        ? (direction = "vertical")
        : (direction = "horizontal");
    };

    return {id, length, getDirection, changeDirection};
};

export default Ship;