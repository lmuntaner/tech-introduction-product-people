# Introduction to GraphQL

## What is GraphQL

GraphQL is a query language that allows the user to specify what information does it want.

It is an alternative to [REST](./rest.md).

However, GraphQL is considered ONLY the query language. There are no other standards enforced.

## Problems with REST

If you initial page has a lot of information from different resources, the client might need to perform a lot of requests to retrive all that.

This will affect the performance of your page.

One solution is to implement a GraphQL API instead of a REST API.

## REST and GraphQL

They both are used to build API Servers.

In a REST API the server exposes different endpoints: `/posts`, `/users`, ...

A GraphQL API has ONLY one endpoint. This endpoint expects a query written in the GraphQL language to specify what it wants to retrieve.

An example of the query would be:

```graphql
author(id: "7") {
  id
  name
  avatarUrl
  articles(limit: 2) {
    name
    urlSlug
  }
}
```

The user can send this query as the body of a POST request.
