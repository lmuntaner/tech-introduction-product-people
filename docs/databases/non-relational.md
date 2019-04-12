# Non Relational Databases

## Which is a non relational database

Any database system that does NOT follow the relational model.

Literally, the definition of all these is compared to NOT following the relational model rules.

They are also known as NoSQL databases.

## Why NoSQL

The popularity of NoSQL databases is closely related to the popularity and growth of web applications.

There are two main reasons to use a NoSQL instead of a relational database:

* Fixed vs flexible schema
* Scalability

### Fixed vs flexible schema

As we learned, with a relational database you have a fixed schema. For example, if we want to add the age of one writer, we need to add a whole column to the table.

This means that all writers will have either have the `age` property. Even though it might be empty.

This is a simple example of the lack of flexibility of relational databases.

### Scalability

Some (not all) NoSQL databases scale better for millions of records.

With the growth of popularity in web applications, these applications have grown to store millions and millions of data points.

Relational databases started having problems and taking a long time to retrieve data.

Some NoSQL databases were developed to better handle millions and millions of data points.

## Examples of NoSQL

* Key-value storage such as [Redis](https://redis.io/).
* Document based databases. For example [Mongo DB](https://www.mongodb.com).
* Graph based. Example [Arango DB](https://www.arangodb.com/).
