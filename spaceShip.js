/**
 * Cecilia Tong
 * Homework #3
 * Tuesday 11/1/2022
 * Spaceships
 */

// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

//define class
class SpaceShip {
    constructor(name, topSpeed){
        this.name = name;
        this.topSpeed = topSpeed;
    }
accelerate(){
    const {name, topSpeed} = this;
    console.log(`${name} moving to ${this.topSpeed}`);
};
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const imaginationShip = new SpaceShip('Imagination', '163 km/s');
const libertyShip = new SpaceShip('Liberty', '150 km/s');
libertyShip.accelerate();
imaginationShip.accelerate();