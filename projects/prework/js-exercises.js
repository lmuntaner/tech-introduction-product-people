// EXERCISE 1
//
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars
// Write a function that takes an array of words and returns the length of the longest one.

/*

var words = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"];

const checkLength = function() {}

const maxLength = checkLength(words);
console.log(maxLength === 6);

*/

// EXERCISE 2
//
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"
// Remember and check what the operator % does!!
// (10 % 3) => 1


/*

const dniLetter = function (dni) {
	const lookup = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
				  "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
  const result = '';
  
  // Do something...

  return result;
}

console.log(dniLetter(12345678) === 'Z');
console.log(dniLetter(34667892) === 'S');
console.log(dniLetter(92234488) === 'A');

*/

// EXERCISE 3
// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars
// Create a function that takes an array of string and returns the unique values

/*

const elements = ['hi', 'hello', 'hi', 'hello world!', 'hola', 'hallo', 'hola'];

const unique = function() {}

const uniqueElements = unique(elements);
console.log(uniqueElements) // ['hi', 'hello', 'hello world!', 'hola', 'hallo']

*/
