# Project

There are two exercises in this module. First regarding build tools and the second one to frontend frameworks.

## Build Tool Project: Webpack

Follow along the [Getting Started](https://webpack.js.org/guides/getting-started/) with Webpack, until *Modules* not included.

### Optional

Finish all the Webpack [Getting Started](https://webpack.js.org/guides/getting-started/)

## Frontend Frameworks: React and VueJS

### React Application

Create a React Application follow [these](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) guidelines.

Visit your application in `http://localhost:3000/`.

Open the folder with your text editor.

Go to `public/index.html`. You can see the empty `<div id="root"></div>` in the `body`. It has none of the content displayed in the browser.

Try to find where the text *"Edit src/App.js and save to reload."* is and change it to *"React Rules"*.

### VueJS Application

Create a new folder for the VueJS Application.

Create the following files:

* `index.html`. Fill it with the expected tags: DOCTYPE, `<html>`, `<head>`.
* `app.js`

Add VueJS by adding a script tag in the `<head>` linking to the library:

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

Add a script tag linking to you `app.js` at the end of the `<body>` tag.

```html
<script src="app.js"></script>
```

Add inside the `<body>` but above the previous script tag.

```html
<div id="app">
  {{ message }}
</div>
```

Add the following in `app.js`:

```javascript
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
```

Open `index.html` with your browser.

You should see `Hello Vue!` instead of what you have in your html which is `{{ message }}`.
