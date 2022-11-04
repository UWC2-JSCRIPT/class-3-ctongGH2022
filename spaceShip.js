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
    console.log(`${this.name} moving to ${this.topSpeed}`);
};
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.
const diamond = new SpaceShip('Diamond', '163 km/s');
const liberty = new SpaceShip('Liberty', '150 km/s');
diamond.accelerate();
liberty.accelerate();