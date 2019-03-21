# Reverse da String

## Exercises

You have to develop a function that will receive a string as argument and needs to return it reversed.

For example:

```javascript
'hello' //-> 'olleh'
```

## Requirements

It needs to be a function. It has to reverse all the characters. Consider spaces as any other character. The function needs to return the reversed string.

This is how to use your function:

```javascript
const result = reverseDaString('hello, world!');
console.log(result); // this should print '!dlrow ,olleh'
```

What follows now is a set of recommended steps to start solving the problem.

If you are confident that you already know how to tackle the problem. Go ahead and solve it without reading further.

## First step: Setup the requirements

It's very important that you go step by step. Always running your code after changing 1 or 2 lines of code.

For now, write the requirement in a new file called `reverse.js`.

```javascript
const result = reverseDaString('hello, world!');
console.log(result);
```

Go ahead and execute this in the terminal:

```text
node reverse.js
```

You will see and error telling you that `reverseDaString` is not defined or something similar.

That's because `reverseDaString` does not exist yet. Let's create it.

```javascript
const reverseDaString = function() {};

const result = reverseDaString('hello, world!');
console.log(result);
```

If you run it now you don't have any errors. However, you don't see anything printed.

## Second step: Return something

I recommend reading [this](https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99) article if you are not comfortable yet with the functions.

In this step we are going to return something from our function. Which in turn will be printed back to us for the `console.log` after the call the the function.

Go ahead and try this:

```javascript
const reverseDaString = function() {
  return 'hi';
};

const result = reverseDaString('hello, world!');
console.log(result);
```

Check the `return 'hi';`. This means that we are _returning_ the string `hi` from our function.

Execute `node reverseDaString.js`

Therefore you will see it.

## Third step: Function parameter

When we call the function, we are _passing_ a specific value:

```javascript
reverseDaString('hello, world!');
```

How do we use or access this `hello, world!` string within our function?

Adding it in our function definition:

```javascript
const reverseDaString = function(myString) {
  console.log(myString);
  return 'hi';
};
```

If you run it now, you have 2 things in the console:

```text
hello world!
hi
```

The first one comes from inside the function `console.log(myString);`; the other one from outside `console.log(result);`.

## Fourth step: Create a new variable

Do not lose sight of what we are trying to do here. We are trying to create a NEW string which will be the reversed of another one.

Create a new variable that will hold this new string. For now, an empty string is ok.

```javascript
const reverseDaString = function(myString) {
  console.log(myString);
  const reversed = '';
  return 'hi';
};
```

Now return this new created variable:

```javascript
const reverseDaString = function(myString) {
  console.log(myString);
  const reversed = '';
  return reversed;
};
```

If you execute it now, you have:

```text
hello world!
```

We are returning an empty string.

```javascript
const result = reverseDaString('hello, world!');
console.log(result);
```

Remember that `result` will hold the value returned by our function. In this case an empty string.

What happens if we print an empty string? Exactly, we get an empty string.

## Fifth step: and forward

Now it's your turn to solve the problem.

The steps were some help to setup. But not to actually solve the problem.

Part of the learning and "fun" is struggling to solve and understand things.

Learning can be sometimes a struggle. Realizing that it is ok to struggle, that we learn from it and move on it's important.

A few tips to solve it:

* Check out loops
* Or check out methods on String and Array

**Good luck!**

