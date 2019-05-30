# Count Da Words

## Exercises

You have to develop a function that will receive a string as argument and needs to return how many words are in it.

We can consider that two words are always separated by an empty space

For example:

```javascript
'guide your learning through pain' //-> 5
```

## Requirements

It needs to be a function. It has to count all the words. The function needs to return a number.

This is how to use your function:

```javascript
const result = countWords('guide your learning through pain');
console.log(result); // this should print `5`
```

What follows now is a set of recommended steps to start solving the problem.

If you are confident to tackle the problem right now, go ahead and solve it without reading further.

## First step: Setup the requirements

It's very important that you go step by step. Always running your code after changing 1 or 2 lines of code.

For now, copy the following in a new file called `countWords.js`.

```javascript
const result = countWords('guide your learning through pain');
console.log(result);
```

Go ahead and execute this in the terminal:

```text
node countWords.js
```

You will see and error telling you that `countWords` is not defined or something similar.

That's because `countWords` does not exist yet. Let's create it.

```javascript
const countWords = function() {};

const result = countWords('guide your learning through pain');
console.log(result);
```

If you run it now you don't have any errors. However, you don't see anything printed.

## Second step: Return something

I recommend reading [this](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99) article if you are not comfortable yet with the functions.

In this step we are going to return something from our function. Which in turn will be printed back to us for the `console.log` after the calling the function.

Go ahead and try this:

```javascript
const countWords = function() {
  return 'hi';
};

const result = countWords('guide your learning through pain');
console.log(result);
```

Check the `return 'hi';`. This means that we are _returning_ the string `hi` from our function.

Execute `node countWords.js`

## Third step: Function parameter

When we call the function, we are _passing_ a specific value:

```javascript
countWords('guide your learning through pain');
```

How do we use or access this `guide your learning through pain` string within our function?

Adding it in our function definition:

```javascript
const countWords = function(myString) {
  console.log(myString);
  return 'hi';
};
```

If you run it now, you have 2 things in the console:

```text
guide your learning through pain
hi
```

The first one comes from inside the function `console.log(myString);`; the other one from outside `console.log(result);`.

## Fourth step: Create a new variable

Do not lose sight of what we are trying to do here. We are trying to count the number of words.

Create a new variable that will hold this count. For now, 0 is ok.

```javascript
const countWords = function(myString) {
  console.log(myString);
  const numberOfWords = 0;
  return 'hi';
};
```

Now return this new created variable:

```javascript
const countWords = function(myString) {
  console.log(myString);
  const numberOfWords = 0;
  return numberOfWords;
};
```

If you execute it now, you have:

```text
guide your learning through pain
0
```

We are returning a 0.

```javascript
const result = countWords('guide your learning through pain');
console.log(result);
```

Remember that `result` will hold the value returned by our function. In this case 0.

## Fifth step: Split the string

One of the keys in solving a problem in programming is to know your tools.

What are the "tools" that you have at your disposal? By tools I mean, what can we do with Javascript? We can use for loops, or if statements, functions, variables, ... All that you learned earlier.

There are always many ways of solving a problem. Most of the times there is no right way to do it. Each solution has advantages and disadvantages.

For now, I want to remind you of a tool that is very useful for the current problem. The methods on String.

### String methods

A method is like a function that is applied to some value.

For example:

```javascript
'hello'.toUpperCase();
// same as
var word = 'hello';
word.toUpperCase();
```

[Link to ALL the String methods.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Splitting the string

Back to our problem, there is a method that will help us get closer to the solution.

[The split method.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)

The documentation above gives a good example on what `split` does and how to use it.

Go ahead and use it in `countWords`. Return the array with the words.

## Last step: Count the words

With `split` you created an array with all the words in the sentence.

You need to know how to get the amount of elements in an array.

To do so you need to use `length` in the array.

[Check the documentation on length.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

Now just return that number and you are done!

**Congratulations you made it till the end.**
