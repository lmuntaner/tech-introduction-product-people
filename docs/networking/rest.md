# REST

## Definition

REST stands for Representational State Transfer. Simply put it is a set of best practices when building API servers.

The basic idea is that the way to interact with a specific resource within that API has a clear set of paths.

A beginner can assume that most APIs work more or less following this set of best practices:

### Use HTTP methods explicitly

As stated in the explanation of HTTP:

* GET. Used to retrieve information.
* POST. Used to send data to be stored (usually in a database).
* PATCH. Used to send data to change an existing data already stored.
* PUT. Similar to a PATCH.
* DELETE. Used to remove some data alrady stored.
* OPTIONS. Used for security reasons to check that the client is an authorized client.

### Be stateless

Each set of request-response should be independent. This ones comes almost from the HTTP Protocol.

Even though technically you could trick it to *remember* your previous request, it is not considered a best practice.

### Expose directory structure-like URIs

Let's say we have a cookbook app. A well structures URI to interact with it would be:

* `/recipes` to retrieve all the recipes.
* `/recipes/<recipeId>` to retrieve the data of a single recipe.
* `/categories` to retrieve all the categories.
* `/favorites/recipes` to retrieve all the favorite recipes.

### Transfer XML, JavaScript Object Notation (JSON), or both

The response of the body should be either JSON or XML. Any other format is not considered a best practice.

## What is NOT REST

Sometimes it is better to understand something by looking at what that is NOT.

Specially when that is a standard that you see everywhere and you can't easily find the non-standard.

### SOAP

SOAP is another set of best practices on how to structure a *client-server* relationship.

It focuses more on exposing logic rather than resources.

An example of a request to retrieve a recipe using SOAP would be to send a `POST` to `/recipes` with the following body:

```xml
<?xml version = "1.0"?>
<SOAP-ENV:Envelope
   xmlns:SOAP-ENV = "http://www.w3.org/2001/12/soap-envelope"
   SOAP-ENV:encodingStyle = "http://www.w3.org/2001/12/soap-encoding">

   <SOAP-ENV:Body xmlns:m = "http://www.xyz.org/recipes">
      <m:GetRecipe>
         <m:RecipeId>apple-pie</m:RecipeId>
      </m:GetRecipe>
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

As you can see, the body is used to specify WHAT you need.

The same request in a REST structure could have been a `GET` request to `/recipes/apple-pie`.
