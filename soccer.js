/**
 * Cecilia Tong
 * Class 3 Exercise & Homework
 * Nov 1st, 2022
 * Soccer Standing
 */

//given object
const RESULT_VALUES = {
  w: 3, //win
  d: 1, //draw
  l: 0 //loss
}

//given function
/**
 * Takes a single result string and (one of 'w', 'l', or 'd') 
 * and returns the point value
 * 
 * @param {string} result 
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins(w), draws(d), and losses(l) i.e. 'wwdlw'
// Returns total number of points won
function getTotalPoints(strResults){
  let totalPoints = 0;
  for(let i=0; i < String(strResults).length; i++){ 
    totalPoints += getPointsFromResult(strResults[i]);
  }
  return(`${totalPoints}`);
}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7
console.log(getTotalPoints('wwddll')); // should equal 8


// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"
function orderTeams(...teamObjs){
  for (let i=0; i < teamObjs.length; i++){
    console.log(`${teamObjs[i].name}: ${getTotalPoints(teamObjs[i].results)}`);
  }   
}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);

// should log the following to the console:
// Sounders: 7
// Galaxy: 4