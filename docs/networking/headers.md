# Headers

## Why headers

To send extra information about the client or the request.

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

## Example: Content-Type

The **Content-Type** header is used to specify in which format the body is sent.

Remember that in a request or a response, the body is the data sent. When the client sends data, it can ONLY send text. Not actual arrays, or objects.

Most of the time, the client or server wants to send structured data. For example, an object. The data needs to be stringified somehow.

How does the other part know, how it was stringified so that it can be parsed properly?

The answer is with the **Content-Type** header. The value of the header tells the other part (client or server) how the text received should be parsed.

One of the **Content-Type** most commonly used is **application/json**. It stands for the format called [JSON](./json.md) which you will learn in this module as well.

[List of content types.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types)

## Custom headers

A custom header is a header that a server might expect a client to use.

When working with a server, the client needs to know what the server expects. Not all servers have the same paths or expect the same methods or headers.

There are best practices that most servers follow, but that doesn't mean that they all work the same way.

Using custom headers is one way that the server can be special and different from others.
