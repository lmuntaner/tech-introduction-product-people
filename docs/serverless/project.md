# Project

## Container

Containerize an express server with Docker.

Follow along [this](https://nodejs.org/de/docs/guides/nodejs-docker-webapp/) great article.

## Function

Create and deploy a Google Cloud Function.

The main article is [here](https://firebase.google.com/docs/functions/get-started). This is a simplified version of it.

### Create a Firebase Account and Project

Go to the [Firebase Console](https://console.firebase.google.com/u/0/).

You can use your Google account to log in.

Create a new Firebase project. Name it `hello-world` for example.

### Setup NodeJS and the Firebase CLI

Make sure you have NodeJS installed by running `node -v` in the terminal.

Otherwise go back to the prework and set it up.

Install `firebase-tools`:

```shell
npm install -g firebase-tools
```

### Initialize Firebase SDK for Cloud Functions

#### Login to Google:

```shell
firebase login
```

This will authenticate your computer so that it can connect with Google Cloud.

#### Initialize a functions project:

Create a folder and navigate to it with the terminal.

```
firebase init functions
```

Select the project you created in Firebase when prompted for it.

```shell
Select a default Firebase project for this directory: hello-world-8ab97 (hello-world)
```

Select Javascript as language.

```shell
What language would you like to use to write Cloud Functions? JavaScript
```

Enforce style guide. You can say No in this one. It will be fun for you to learn a little bit about linting though.

```shell
Do you want to use ESLint to catch probable bugs and enforce style? Yes
```

Install dependencies now.

```shell
Do you want to install dependencies with npm now? Yes
```

Check the folder. You now have a `firebase.json` and a `/functions` folder.

Inside the `/functions` folder you have a whole `node` project. Similar to the one you created in the project with the Express server.

### Create your first function

Open `/functions` with VS Code or your choice of text editor.

Open the file `/functions/index.js`. Uncomment the following part:

```javascript
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
```

It should be:

```javascript
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
```

### Execute the function

Run the following from within the `/functions` folder:

```shell
npm run serve
```

It should output a url similar to this one:

```shell
✔  functions: helloWorld: http://localhost:5000/hello-world-8ab97/us-central1/helloWorld
```

Visit `http://localhost:5000/hello-world-8ab97/us-central1/helloWorld` with your browser.

You will see `Hello World`.

### Deploy the function

Deploying means to make it public.

```shell
npm run deploy
```

This will output also a url. This time a public one. Not local.

```shell
✔  functions: Finished running predeploy script.
i  functions: ensuring necessary APIs are enabled...
✔  functions: all necessary APIs are enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged functions (38.73 KB) for uploading
✔  functions: functions folder uploaded successfully
i  functions: creating Node.js 6 function helloWorld(us-central1)...
✔  functions[helloWorld(us-central1)]: Successful create operation.
Function URL (helloWorld): https://us-central1-hello-world-8ab97.cloudfunctions.net/helloWorld
```

Go there with the browser.

### Create and deploy another function

Now create and deploy a function that returns a today's date. Similar to the exercise number 2 in [Introduction to Computer Science](intro-cs/project.md).

To create a new function you only need to export it following the same pattern as in `helloWorld`:

```javascript
exports.helloWorld = functions.https.onRequest((request, response) => {
  //...
}
```

The new function could be:

```javascript
exports.helloWorld = functions.https.onRequest((request, response) => {
  //...
}

exports.today = functions.https.onRequest((request, response) => {
  //...
}
```

You are in `node` project. You can install dependencies with `npm init` like you did in the other project.

### Optional: Deploy another function for only one writer

Same with the Express project. Create a function that will return only one writer.

Read the part of using an Express server inside a function [here](https://firebase.google.com/docs/functions/http-events#trigger_a_function_with_an_http_request) for some help.