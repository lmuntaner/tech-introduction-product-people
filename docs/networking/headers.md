# Headers

## Why headers

The send extra information about the client or the request.

More specifically this could also be referred as metadata.

It is additional information with the request: who made the request, when, which user agent, etc.

## What is a Header

A Header is a key - value pair.

An example of a header is: `Content-Type: application/json`.

In this example the key is `Content-Type` and the value is `application/json`.

It is important to note that the key is case insensitive. `Content-Type` is the same as `content-type`.

## Standard headers

There are some headers that are standard and usually present in most of the requests.

* Content-Type
* Cookie
* User-Agent
* Origin

[List of Standard Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Request_fields)

## Custom headers

A custom header is a header that a server might expect a client to use.

When working with a server, the client needs to know what the server expects. Not all servers work the same way, have the same paths, expect the same methods or headers.

There are best practices that most servers follow, but that doesn't mean that they all work the same way.

Using custom headers is one way that the server can be special and different from others.
