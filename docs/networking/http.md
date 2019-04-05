# HTTP Protocol

The HTTP Protocol is one of the protocols used on the Internet.

Specifically is the one most used in the World Wide Web.

## Protocol

In the previous module we saw that a protocol is:

> A standard on *how* to share the information agreed between two devices.

Hypertext Transfer Protocol (HTTP) was started by Tim Berners-Lee at CERN in 1989 as a means to connect between web browsers and web servers.

It is the protocols most used in a *client-server* architecture.

HTTP consists of two main parts: **Request** and **Response**.

The client is the one sending the request and it expects a response back from the server.

Each set of request-response is independent from the others. Every time the client sends a request is like if it was the first time.

This means that this protocols is Stateless.

### User Agent

The User Agent is the tool that the client uses to send a request.

Most common ones are web browsers.

There are other examples such as mobile apps, web crawlers, specific software, etc.

## Request

The Request contains every information about the action that the clients is trying to do.

It has a few important parts;

* Method
* [URL](./url.md)
* Version of the protocol. Usually 1.1
* [Headers](./headers.md)
* Body

### Method

The mos common methods are.

* GET. Used to retrieve information.
* POST. Used to send data to be stored (usually in a data base).
* PATCH. Used to send data to change an existing data already stored.
* PUT. Similar to a PATCH.
* DELETE. Used to remove some data alrady stored.
* OPTIONS. Used for security reasons to check that the client is an authorized client.

[More on methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

The functionality of the method is not a technical limitation. The developer creating a server could choose to ask for POST requests to read information instead of using GET.

However we will see how this is not a best practice in the [REST notes](./rest).

### Request Body

This is any information or data the clients needs to send to the server along the request.

For example, when you make a request to create a tweet, you need to send the text of the tweet you want to add. The text, would be sent as part of the body of the request.

## Response

The Response is the reply of the sever to a specific request.

**There is no response without a request.**

The response has the following parts:

* Status
* [Headers](./headers.md)
* Body
* Status

### Response Body

This part is usually ths most important part of the response. Is what the client is actually expecting.

It could be an HTML file, an image or just plain data.

### Status

This is some metadata about the success of the request.

The status is a number of 3 digits.

* 1xx Informational
* 2xx Success
* 3xx Redirection
* 4xx. Client error
* 5xx. Server error

[List of status](https://httpstatuses.com/)

An example of a 4xx would be that you asked for the wront path. You have probably seen those 404 pages. This status is means that what you are looking for does not exist.

A 5xx happens when the request is ok, but the server had a problem. Maybe the database connection failed, or there is a bug and it crashed.

## Fun fact

This [tweet](https://twitter.com/stevelosh/status/372740571749572610) explain perfectly the different Response Status.
