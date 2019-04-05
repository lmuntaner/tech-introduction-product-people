# Authentication

Authentication means that the data offered by a server is not available to everyone.

You need to be authenticated by the server.

## How to authenticate a user

Headers are used to authenticate a client.

Either by using a custom or a standard header (Authorization or Cookie).

## Naive implementation

One simple and NOT SECURE way of doing this would be to send the email and password in every request.

Imagine a server that expects the client to send two extra headers: `email` and `password` in each request.

This is technically possible, but as you can imagine not very secure and not simple either.

## Using a token

Usually this authentication is made by a token in this header.

A token is just an unreadable string (for a human) that can be translated to information by some math and a secret key that only the server has.

### Get the token

This is what the login is for. In the login is the only time that the user is expected to send the password.

The response of a *login* contains a token. Which can be used in further requests to authenticate the user.
