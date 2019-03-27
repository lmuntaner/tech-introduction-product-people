# Your first JS Program

## Setup

You first need `node` installed.

If you already have `node` installed, skip this step.

Otherwise, go to [nodejs.org](https://nodejs.org/en/) and follow the installation steps.

## Test setup

To make sure that you are good to go, try the following:

Open a terminal, write `node -v` and press enter.

You should see a version number such as `11.9.0`.

If you get `command not found:` or similar is that the installation was not successful. Try again to follow the steps to install `node` and restart your computer.

### Terminal

If you don't know what the terminal or command line interface is. Read [this](https://lifehacker.com/a-command-line-primer-for-beginners-5633909) article.

In Mac and Linux it's called **Terminal**. In Windows it's **PowerShell**, **Cmd** or **Cygwin** if you install it.

There is no need to go over all the article. Just get the gist of it.

Before moving one, make sure you have `node` installed.

## Create your script file

Create a folder for your script.

Create a file called `app.js`. Open it with your text editor.

Then copy inside it:

```javascript
console.log('Hello, world!');
```

[Why 'Hello, world!'?](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)

## Execute your script \(or program\)

Open the terminal.

Navigate to the folder where you created your `app.js`.

To do so, open the terminal, and drag the folder to it. Then press enter.

_Note: You might need to write_ `cd` _\(for change directory\) before dragging the folder to the terminal._

To make sure you are in the folder with the file run: `ls` \(or `dir`\). You should see your `app.js` in the list of files.

Finally, execute your program:

```bash
node app.js
```

You should see the result in the screen:

```bash
Hello, world!
```

## Getting fancy

Inside this `app.js` you can use all the Javascript that you have learned in the tutorials.

For example:

```javascript
function multiplyByTen(num) {
  return num * 10;
}

const result = multiplyByTen(8);
console.log(result);
```

If you don't `console.log` you will never see anything in the terminal.

That doesn't mean that nothing has happened, just that you haven't printed it.

For example:

```javascript
function multiplyByTen(num) {
  return num * 10;
}

const result = multiplyByTen(8);
```

This script still multiplies by ten. You just won't see the result because you are not printing it.

