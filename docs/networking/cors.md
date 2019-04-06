# CORS

## Why CORS

This was devised as a layer of security.

It means that from a website hosted in a specific domain: `http://domain-a.com` you cannot access resources in another domain: `http://domain-b.com`.

This limitation is enforced in the browser. The browser doesn't allow to retrieve information from another server than the one that gave you the initial HTML page.

## What is CORS

This cross domain interaction is now very common.

The mechanism to allow this cross domain interaction is known as CORS.

This mechanism uses specific HTTP Headers to tell the browser that it is ok to retrive resources from another domain.
