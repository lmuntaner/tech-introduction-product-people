# Relational Databases

## What is a relational database

It is a set of rules on how to organize and manage your data to create, read, update and delete. Those are called the CRUD operations (create, read, update and delete).

## Tables and rows

In relational databases the information is stored in tables. Similar to an Excel table.

Each table has columns and rows.

A column is an attributes of the data, whereas a row is an instance of the data.

This is an example of a table for writers:

id | first_name | last_name | nationality
---- | ---- | ---- | ----
1 | John | Fante | American
2 | Charles | Bukowski | American
3 | Lev | Tolstoy | Russian
4 | Jack | Kerouac | American
5 | Ernest | Hemingway | American
6 | William | Burroughs | American

Check the first column `id`. One of the main characteristics of a relational database is to have a unique identifier per each row.

This is usually accomplished by using a column called `id` which is a number incremented per each new row. This column that uniquely identifies each row is called **PRIMARY KEY**.

The columns of this table are: `id`, `first_name`, `last_name` and `nationality`. Each column has always the same type of data. For example: `id` will always be an integer, whereas `first_name` will always be text.

Another example would be a table for books:

id | title | author
---- | ---- | ----
1 | Ask The Dust | John Fante
2 | Post Office | Charles Bukowski
3 | Pulp | Charles Bukowski
4 | War And Peace | Lev Tolstoy
5 | Anna Karenina | Lev Tolstoy
6 | On The Road | Jack Kerouac
7 | For Whom The Bell Tolls | Ernest Hemingway
8 | Junkie | William Burroughs

## Schema

The Schema of a database is the list of tables with the columns and their details.

For example, in the previous example we would have:

* `writers`. Columns: `id` - INT, `first_name` - TEXT, `last_name` - TEXT, `nationality` - TEXT.
* `books`. Columns: `id` - INT, `title` - TEXT, `author` - TEXT.

In the schema you can also define constraints that need to be satisfied.

For example, you could force the `title` in `books` to always be present. This means that you won't be able to add a row in `books` without a title.

## Relationships between two tables

### One to Many

In our `books` table, we have duplicated information. The names of the authors appear twice.

A book is written by a writer. We have the writers in another table. We should link each book with a writer instead of copying the information.

id | title | author_id
---- | ---- | ----
1 | Ask The Dust | 1
2 | Post Office | 2
3 | Pulp | 2
4 | War And Peace | 3
5 | Anna Karenina | 3
6 | On The Road | 4
7 | For Whom The Bell Tolls | 5
8 | Junkie | 6

We changed the column name `author` for `author_id` to better represent what it is. This is not a technical requirement, rather a best practice.

Now, the column `author_id` is pointing to an `id` in the table `writers`. A column that points to a primary key in another table is called **FOREIGN KEY**.

This relationship is called a one-to-many relationship.

* A book belongs to a writer
* A writer can have many books

### One to One

In the previous relationship the value of the `author_id` can be repeated. Two books can have the same author.

However, some relationships do not allow for many instances to have the same link.

We could create a table for Nobel Prizes in Literature.

In this case, each writer can only be in one instance (assuming the nobel of literature can only be given once). That doesn't mean that all writers need to be in this table. Only that they might be once in this table.

id | year | author_id
---- | ---- | ----
1 | 1954 | 5

### Many to Many relationship

We have assumed that the relationship of a book with a writer was one-to-many. That a book cannot have more than one writer.

That is not the case. Some books have two or more writers.

For example: *And the Hippos Were Boiled in Their Tanks* was written by Jack Kerouac and William Burroughs.

This is called a many-to-many relationship.

* A book has many authors
* A writer has many books

The way to model this is with an new table.

We also need to remove the relationship from the `books` table:

id | title
---- | ----
1 | Ask The Dust
2 | Post Office
3 | Pulp
4 | War And Peace
5 | Anna Karenina
6 | On The Road
7 | For Whom The Bell Tolls
8 | Junkie
9 | And the Hippos Were Boiled in Their Tanks

Let's call the new table `books_writers`.

id | author_id | book_id
---- | ---- | ----
1 | 1 | 1
2 | 2 | 2
3 | 2 | 3
4 | 3 | 4
5 | 3 | 5
6 | 4 | 6
7 | 5 | 7
8 | 6 | 8
9 | 4 | 9
10 | 6 | 9

This table is hard to read.

Let's take a closer look at the row with `id` 5.

* `id`. Value is 5. This value represents the unique identifier of the relationship. It is not an identifier for the book or the writer. But the relationship between a book and a writer.
* `author_id`. Value is 3. The author with `id` 3. Which is Lev Tolstoy. This is a relationship of a book with Lev Tolstoy.
* `book_id`. Value is 5. The book with `id` 5. Which is Anna Karenina. This is relationship of a writer with the book Anna Karenina.
* This row means that the book Anna Karenina was written at least by Lev Tolstoy.

Let taken a look at the last two rows:

id | author_id | book_id
---- | ---- | ----
... | ... | ...
9 | 4 | 9
10 | 6 | 9

Each of this rows has `book_id` 9. Which is *And the Hippos Were Boiled in Their Tanks*.

There are two relationships with this book. The first one with `author_id` 4, which is Jack Kerouac. The second one with `author_id` 6 which is William Burroughs.

If you think about it, a many-to-many relationship is two one-to-many relationships with an intermediate table.

* A relation book-writer belongs to a writer.
* A writer can have many relations.
* A relation book-writer belongs to a book.
* A book can have many relations.

## Review

**Table:** A collection of a single resource.

**Row:** A single entity of a resource.

**Column:** An attribute of the resources.

**Schema:** The list of tables with the columns and their details.

**Relationships among tables:** One-to-many, one-to-one and many-to-many.