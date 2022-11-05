/**
 * Cecilia Tong
 * Class 3 Exercise & Homework
 * Nov 1st, 2022
 * Phone Number
 */

// 1. Create a function testPhoneNumber 
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

/** Explanation of RegExp
    /^:       start of line
    \(?:      optional start parenthesis
    (\d{3}):  exactly 3 digit characters
    \)?:      optional end parenthesis
    [-\s]:    must be one of a space or a dash
    (\d{3}):  exactly 3 digit characters
    [-\s]:    must be one of a space or a dash
    (\d{4}):  exactly 4 digit characters
    $/:       end of line
*/

//follow rules above to create Ruby expression 
//Notes: if allows '2063334444', a '?' will be added after '[-\s]'
const phoneNumRegExp = /^\(?(\d{3})\)?[-\s](\d{3})?[-\s](\d{4})$/; 

//create function testPhoneNumber 
function testPhoneNumber(phoneNumber){
    if (phoneNumRegExp.test(phoneNumber)) {
      return true;
    }
    else {
      return false;
    }
 }

// check testPhoneNumber function
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('206-333-4444'));   // should return true
console.log(testPhoneNumber('206 333 4444'));   // should return true
console.log(testPhoneNumber('206*333 4444'));   // should return false, should not have '*'
console.log(testPhoneNumber('2063334444'));     // should return false, should have a space or a dash
console.log(testPhoneNumber('(206) 33-4444'));  // should return false, missing a digit

// 2. Create a function parsePhoneNumber that takes in a phoneNumber string 
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

/**
 * Notes:
 * console.log(regExp.exec(phoneNumStr)); 
 * [0] : "206-333-4444"
 * [1] : "206"
 * [2] : "333"
 * [3] : "4444"
 */

// create function parsePhoneNumber
const regExp = /^\(*(\d{3})\)?[-\s]*(\d{3})?[-\s]*(\d{4})$/;
function parsePhoneNumber(phoneNumStr){
   const areaCode = regExp.exec(phoneNumStr)[1]; //area code
   const phoneNumber = regExp.exec(phoneNumStr)[2] + regExp.exec(phoneNumStr)[3]; //phone number
   return(`{ areaCode: '${areaCode}', phoneNumber: '${phoneNumber}' }`);
}

// check parsePhoneNumber function
console.log(parsePhoneNumber('206-333-4444'));
console.log(parsePhoneNumber('(222) 422-5353'));
console.log(parsePhoneNumber('(206) 333-4444'));
console.log(parsePhoneNumber('425-333 4444'));
console.log(parsePhoneNumber('(425)-123-4567'));