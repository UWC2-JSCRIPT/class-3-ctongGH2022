/**
 * Cecilia Tong
 * Class 3 Exercise & Homework
 * Nov 1st, 2022
 * Soccer Standing
 */

/**
Create a function getTotalPoints that accepts a results string with ‘w’ for a win, 
‘l’ for a loss, ‘d’ for a draw.  i.e. this could be passed in for the Sounders July results: “wddwww”
This function will calculate the total number of points for a team (add 3 for each win, 1 for each tie, 0 for each loss).  
I have provided a getPointsFromResult function to help you with this, you can call this method for each result.
Complete orderResults function.  This accepts unlimited team objects { name, results }, and logs the team name & points
Wrap everything in an IIFE to keep the variables out of the global scope
Sample output from 

Hints:
Use string.split to convert a string to an array (use an empty string to separate every single character).  
So 'wwld'.split('') will give you ['w', 'w', 'l', 'd']
Use array.forEach with a function to get the number of points from a result and add to the running total
Use arguments variable in orderResults function to get all of the arguments.
Use Array.from(arguments) to convert the arguments object to an array
Use forEach method to run a function on each item in the array
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
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won
function getTotalPoints(strResults){
  let totalPoints = 0;
  for(let i=0; i < String(strResults).length; i++){ 
    totalPoints += getPointsFromResult(strResults[i]);
  }
  //console.log(strResults);
  console.log(`String results entered is '${strResults}'. Total number of points won is ${totalPoints}`);
}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7


// create orderTeams function that accepts as many team objects as desired, 
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

/*
// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4
*/