# Browsers

## Definition

Browser are an application program to navigate internet.

Their main target is to be able to display HTML pages.

They can also handle CSS and Javascript.

## Steps

### Fetch data

In Internet each page is identified with a specific address, the URL.

When you enter this URL in the address bar, the browser knows where to go and fetch the requested data.

[Read more](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL) about what is a URL.

While parsing HTML or executing Javascript, there might be more orders to go and fetch data.

Each of this orders will start a whole new process of fetching, receiving and parsing.

### Receive data

The browser then will receive some kind of reply to their request.

When the browser receives the data back, it doesn't know which type it is.

The type (text, html, css, ...) of the requested data is usually sent as metadata. Or also at the beginning of the file. Hence the `<!DOCTYPE html>` at the beginning of an HTML file.

When the browser identifies which type of data it has received, it can start to parse it.

### Parse HTML

An HTML file will be read and it will be converted internally into a big object. The Document Object Model or DOM.

The DOM is the internal representation of the HTML inside the browser.

The whole point of having this DOM is to easily be able to access it and manipulate it. Mainly with Javascript.

While parsing an HTML file, the browser might find the need to ask for more data.

An example that might require more data is when you find either a CSS or a Javascript link:

```html
<!-- CSS Link -->
<link rel="stylesheet" href="./style.css">
<!-- JS Link -->
<script src="./app.js"></script>
```

This will prompt the browser to go and fetch these two files: `style.css` and `app.js`. The `.` means use the same domain but different path.

**Important:** If an HTML has some errors, they will never be displayed. The parsing of HTML handles to fix any error and ALWAYS shows something.

### Parse CSS

One of the most important part of parsing a CSS file is to create a Layout Tree.

A Layout Tree is similar to the DOM but with the position in the screen for each object.

The creation of the Layout Tree is more complicated than it seems.

### Parse Javascript

While parsing HTML, the browser might stop creating the DOM if it finds a `script` tag. If it does, it will execute the code and then move on parsing the HTML.

This part is important for two aspects.

* The browser stops creating the DOM and executes Javascript. When you are creating Javascript, you need to take that into account.
* The Javascript code is executing INSIDE the browser. It runs in the browser environment. Not the Operating System.

## Web Application

Javascript code in a Website was used only to add some interactivity with the user.

Hide this button here, move it there, change the color.

However, browsers have become so powerful that sometimes you are running a whole computer program inside your browser.

The browser has become some kind of a smaller Operating System inside the Operating System.

The same way an Operating System is a layer between the hardware and a computer program that executes them.

The browser has become a layer between the Operating System and the Web Application.

A Web Application is considered a computer program that runs inside your browser.

A Desktop Application is a computer program that runs right on top of your Operating System.
