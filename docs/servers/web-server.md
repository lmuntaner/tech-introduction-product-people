# Project: Creating a Web Server

In this project you will need to create two servers.

One with only `node`. The other one with the help of a library called [Express](https://expressjs.com/).

## Using NodeJS

To build a server using only `node` we need to require a built-in library called `http`.

Create a folder for this server. In the folder create a file, for example call it `server.js`.

The file `server.js` is the one that you are going to execute with `node server.js` and it will start the server.

### Your first request

For now copy the following in the new file:

```javascript
const http = require('http');

const server = http.createServer(function (request, response) {
  response.write('hello world');
  response.end();
});

server.listen(8080, function() {
  console.log('Server listening on http://localhost:8080...');
});
```

Once you have that in your file, execute it.

You should see in the console:

```shell
Server listening on port 8080...
```

Take notice that the program does not finish. Not like the previous exercises, where the Terminal got back to the previous state.

The program is still running. Waiting for HTTP requests.

Open the browser and go to `http://localhost:8080/`. You should get `hello world`.

**Congratulations! You created your first server!**

### Add routes

Try to go to `http://localhost:8080/writers` in the browser. You get `hello world`.

[URL reminder](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

In a nutshell:

* `http://localhost:8080` is the address of the server
* `/writers` is called the *path* of the URL. It is to tell the server, what is exactly that you are looking for.

Implement different responses to different paths: `http://localhost:8080` and `http://localhost:8080/writers`.

* `http://localhost:8080` should reply `hello world`.
* `http://localhost:8080/writers` should reply `Don't drink!`.

[Read this](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/) for some help.

Also take a look at the parameter called `request`. It has information about the request.

*Hint: the path it's in `request.url`.*

Try the following before `response.write`:

```javascript
console.log(request.url);
```

You will see something in the Terminal where you run `node server.js`.

**IMPORTANT:** After every change in the code, you need to restart your server.

### List of writers

Your job now is to create a list of writers and return it on a request to `http://localhost:8080/writers`.

Create an array of writers and return it when the url matches this one.

Remember that this is just Javascript. You can do everything that you could do in the exercises. Loops, arrays, variables, console.logs, ...

You will need to create a string from this array. From the server you can ONLY return text. Not arrays or other data types.

You can try the following: `writers.join(', ');`. Assuming `writers` is the name of your array. More about the [join](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) method.

**REMEMBER:** After every change in the code, you need to restart your server.

### One writer

Now we want to allow the client to request only 1 writer.

When the client send a request here: `http://localhost:8080/writers/1` we want to return the first writer in the array.

When the url is `http://localhost:8080/writers/3` then the third writer.

*Hint: Check what happens when you do `request.url.split('/');`.*

**REMEMBER:** After every change in the code, you need to restart your server.

## Using Express

You will need another folder for this part.

Your job now is to create the same server as before, but with the help of a library.

Follow the [Getting started](https://expressjs.com/en/starter/installing.html) first. Skip the *Express application generator* and *Serving static files in Express*.

To identify which writer you need to return in the path `/writers/1` you will need route parameters. Check out [this](https://expressjs.com/en/guide/routing.html) and search for *Route parameters*.

### Bonus: Create a new writer

Allow a path to create a writer.

For example, when you do a request to `/writers/hornby` it should add `hornby` to the array of writers.

You could also use a POST request to `/writers` for it.

Check how to receive data from a POST with Express [here](https://expressjs.com/en/4x/api.html#req.body).

### Bonus: Create a new writer in node server

Add the same functionality in the previous `node` server you just built.

Read again [this article](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/) for some help on how to do this.
