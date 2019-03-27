// EXERCISE 1

// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars.
// Write a function that takes a string and returns the longest word.

const sentence1 = 'guide your learning through pain';

const findLongest = function(sentence) {
  const words = sentence.split(' ');
  let maxLength = 0;
  let maxLengthWord;
  for (const word of words) {
    if (word.length > maxLength) {
      maxLengthWord = word;
      maxLength = word.length;
    }
  }
  return maxLengthWord;
}

const longestWord = findLongest(sentence1);
console.log(longestWord === 'learning'); // true

// EXERCISE 2

// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars.
// Write a function that prints today's date in the following format
// 'Wednesday, April 24, 2019'
// Use the Luxon library: https://moment.github.io/luxon/
// Check out the formatting features: https://moment.github.io/luxon/docs/manual/formatting.html

const { DateTime } = require('luxon');

const today = function() {
  const date = DateTime.local();
  console.log(date.toLocaleString(DateTime.DATE_HUGE));
}

today(); //'Wednesday, April 24, 2019'

// EXERCISE 3

// Write a function that takes numbers and a minimum.
// It returns only those numbers greater than the minimum.

const numbers1 = [2, 4, 6, 7, 10, 15];
const minimum = 8;

const greaterThan = function(numbers, maxNumber) {
  return numbers.filter(function (number) {
    return number > maxNumber;
  });
}

const largerNumbers = greaterThan(numbers1, minimum);
console.log(largerNumbers); // [10, 15]

// EXERCISE 4

// Restore the comments marks (/* */) of the previous exercises.
// Uncomment the exercise code deleting /* and */ chars.
// Write a function that takes a number.
// Print all the numbers until that one.
// If the number going to be printed is multiple of 3. Print `Fizz` not the number.
// If the number going to be printed is multiple of 5. Print `Buzz` not the number.
// If the number going to be printed is multiple of 3 and 5. Print `FizzBuzz` not the number.

const fizzBuzz = function(limit) {
  for (let i = 1; i <= limit; i++) {
    const isMultiple3 = i % 3 === 0;
    const isMultiple5 = i % 5 === 0;
    if (isMultiple3 && isMultiple5) {
      console.log('FizzBuzz');
    } else if (isMultiple3) {
      console.log('Fizz');
    } else if (isMultiple5) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(10);

// It should print:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
