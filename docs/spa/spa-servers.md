# SPA and servers

## Api Server

A Single Page Application relies heavily on requests to get the information.

This means that where you have a SPA you also have at least one [api server](networking/apis.md).

The api server could be a headless cms or the server with your application logic connected to the data base.

## Static files server

A SPA is just a set of HTML, CSS and JS files. Some server needs to send this as a response when the client asks for them.

Depending on the rendering of the SPA -client side, server side or build time- it needs a different kind of server.

Client side or build time rendering means that the server doesn't need to do any task. It only needs to serve the files, HTML, CSS and JS files usually.

When the files server do not change depending on the request, they are called *static files*.

## Server side rendering server

This is different for server side rendering.

In this scenario, the server needs to build a different HTML page depending on the request.

It has to execute some code before sending back the response. The server is more similar to the one built in the [servers project](servers/project.md).
