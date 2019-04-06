# Authentication

Authentication means that the data offered by a server is not available to everyone.

You need to be authenticated by the server.

## How to authenticate a user

Headers are also used to authenticate a client.

Either by using a custom or a standard header (Authorization or Cookie).

## Naive implementation

One simple and NOT SECURE way of doing this would be to send the email and password in every request.

Imagine a server that expects the client to send two extra headers: `email` and `password` in each request.

This is technically possible, but not secure at all.

## Using a token

Usually this authentication is made by a token in this header.

A token is just an unreadable string (for a human) that can be translated to information by some math and a secret key that only the server has.

### Get the token

This is what the login is for. The only time that the password is sent is in the login process.

In a typical login process the client would send a *username* and *password* as part of a POST request.

The response of that request would contain a token in the body. This token can be used in further requests to authenticate the user.
