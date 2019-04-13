# HTTP Protocol

The HTTP Protocol is one of the protocols used on the Internet. It is the most commonly used in the World Wide Web.

## Protocol

In the previous module we saw that a protocol is:

> A standard on *how* to share the information agreed between two devices.

Hypertext Transfer Protocol (HTTP) was started by Tim Berners-Lee at CERN in 1989 as a means to connect web browsers and web servers.

It is the protocol most commonly used in a *client-server* architecture.

HTTP consists of two main parts: **Request** and **Response**.

The client is the one sending the request and it expects a response back from the server.

Each set of request-response is independent from the others. There is no difference between the first, second or any subsequent request. This means that the protocol is Stateless.

### User Agent

The User Agent is the tool that the client uses to send a request.

Most common ones are web browsers.

There are other examples such as mobile apps, web crawlers, specific software, etc.

## Request

The Request contains information about what the client wants.

It has a few important parts:

* Method
* [URL](./url.md)
* Version of the protocol. Usually 1.1
* [Headers](./headers.md)
* Body

### Method

The mos common methods are.

* GET. Used to retrieve information.
* POST. Used to send data to be stored (usually in a database).
* PATCH. Used to change existing data already stored.
* PUT. Similar to a PATCH.
* DELETE. Used to remove some data.
* OPTIONS. Used for security reasons. To check that the client is an authorized client.

[More on methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

The functionality of the method is not a technical limitation. The developer creating a server could choose POST requests to read information instead of using GET.

These are more best practices than actual requirements. More in the [REST notes](./rest).

### Request Body

This is any information or data the clients needs to send to the server along the request.

For example, when you make a request to create a tweet, you need to send the text of the tweet you want to add. The text, would be sent as part of the body of the request.

## Response

The Response is the reply of the sever to a specific request.

**There is no response without a request.**

The response has the main following parts:

* Status
* [Headers](./headers.md)
* Body

### Response Body

This part is usually ths most important part of the response. Is what the client is actually expecting.

It could be an HTML file, an image or data in [json](./json) format.

### Status

This is some metadata about the success of the request.

The status is a number of 3 digits.

* 1xx Informational
* 2xx Success
* 3xx Redirection
* 4xx Client error
* 5xx Server error

[List of status](https://httpstatuses.com/)

An example of a 4xx would be that you asked for the wrong path. You have probably seen those 404 pages. This status means that what you are looking for does not exist.

A 5xx happens when the request is ok, but the server had a problem. Maybe the database connection failed, or there is a bug and it crashed.

### HTTPS

HTTPS is an extension of the HTTP protocol that brings more security.

The main difference is that the information sent through the protocol is encrypted. Which means that if a third-party intercepts a request or response, it won't be able to understand what's in there.

This type of attacks are called *man-in-the-middle* attacks.

HTTPS is becoming the norm rather than HTTP. In Chrome, if a website is served through HTTP it is considered as non-secure. Most search engines rank better if the website is served through HTTPS.

Any concept learned about HTTP can be applied to HTTPS.

## Fun fact

This [tweet](https://twitter.com/stevelosh/status/372740571749572610) explains the different Response Status.
