/**
 * Cecilia Tong
 * Homework #3
 * Tuesday 11/1/2022
 */

// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage
/**
The function should do the following:
1. Calculate total damage. This will equal baseDamageplus a random
integer from 0 to the amount of the variableDamage
2. Reduce the health property of the defendingPlayer by the
amount of the calculated damage
3. Return a string describing the attack, i.e. "Merlin hits
James Bond for 4 damage"
 */
function attack1(attackingPlayer, defendingPlayer, baseDamage, variableDamage){
  let randomDamage = Math.floor(Math.random() * variableDamage + 1);
  let totalDamage = baseDamage + randomDamage;
  defendingPlayer.health -= totalDamage;
  return console.log(`${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage`);
}

// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10
const player1 = {
  name: "Maria",
  health: 10,
}
const player2= {
  name: "Faustina",
  health: 10,
}

// 3. Refactor attack function to an arrow function.  Comment out function above.
const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {
  let randomDamage = Math.floor(Math.random() * variableDamage + 1);
  let totalDamage = baseDamage + randomDamage;
  defendingPlayer.health -= totalDamage;
  return console.log(`${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage`);
} 

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);