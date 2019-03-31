# Project: Introduction to Computer Science

The main outcome of this project is to understand WHERE your code is being executed.

Where the code is being executed changes how you write your code and which tasks you can perform.

You are going to solve a set of exercises and run them in the Terminal like in the recommended exercises.

However, the next step will be to try to execute those same exercises in the browser.

## Exercises

The exercises you are going to perform are [here](../../projects/intro-cs/exercises.js).

Download the file and solve them.

## Node Environment

First of all try to run them from the terminal with `node`.

### Create a Node Project

Before being able to use a package, you need to create a Node Project in your folder.

Open the terminal. Navigate to the folder. You should ONLY have the `js` file in that folder for now.

In the terminal, run `npm init -y`.

You will see how this created a file called `package.json`.

### Install a library for the project

If you want to add a library, you can now do so with `npm install <library>`.

For the project you can run this:

```shell
npm install luxon
```

This will change your `package.json`, add a folder called `node_modules` and -depending on your node version- create a `package-lock.json`.

### Use the library

To use the library you need to import in your file.

```javascript
var { DateTime } = require('luxon');

// Test whether it's working
console.log(DateTime.local());
```

### Solve Exercises

Move one to the next step after finishing the first three exercises.

You should finish the rest after solving the first three in the browser.

## Browser environment

Your job now is to try and execute the same file in a browser.

Create a new folder and copy the `exercises.js` file there.

You will need an HTML file with at least the minimum structure required.

Add a script tag in it:

```html
<script src="./exercises.js"></script>
```

Open your HTML file with the browser.

Open the Dev Tools Console in your browser. Right click inside the blank page, then choose `Inspect` or whatever that is in your language.

Or just google `Open console with Chrome / Firefox / Edge`.

If you have copy pasted the code. You should see an error.

Something like this. Probably in red letters 😱

> Uncaught ReferenceError: require is not defined

Try to find out WHY there is the error and fix it.

## Finish exercises

Remember to solve the rest of exercises in both, the browser and running in the Terminal.