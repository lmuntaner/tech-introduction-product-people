# Project

## SQL practice

Practice some SQL queries with [SQL Zoo](https://sqlzoo.net/wiki/SQL_Tutorial):

* [0 SELECT basics](https://sqlzoo.net/wiki/SELECT_basics).
* [1 SELECT name](https://sqlzoo.net/wiki/SELECT_names). First 10 exercises, the rest are optional.
* [3 SELECT from Nobel](https://sqlzoo.net/wiki/SELECT_from_Nobel_Tutorial). First 10 exercises, the rest are optional.
* [5 SUM and COUNT](https://sqlzoo.net/wiki/SUM_and_COUNT).
* [6 JOIN](https://sqlzoo.net/wiki/The_JOIN_operation).

## SQL Lite Browser

Time to create your own database.

Go to [SQLite Browser](http://sqlitebrowser.org/), download and install the software.

Open it and create your first database: `bookshop.sqlite`. Ignore the next step to *Edit table definition*.

Now you have an empty database. No tables, no rows, no columns.

### Create your first table

Look for the tab to *Execute SQL*.

The SQL statement to create a table is the following:

```sql
CREATE TABLE writers (
  id integer PRIMARY KEY,
  first_name text,
  last_name text,
  nationality text
);
```

Press *Play* to execute this statement.

After creating it you should see the table in the tab *Database Structure*.

### Drop a table

If you are not happy with the table or you made some mistake, you can remove the table with:

```sql
DROP TABLE writers;
```

### Insert data

The SQL clause to add some data is `INSERT INTO`:

```sql
INSERT INTO writers
  (first_name, last_name, nationality)
VALUES
  ("John", "Fante", "American"),
  ("Charles", "Bukowski", "American"),
  ("Lev", "Tolstoy", "Russian"),
  ("Jack", "Kerouac", "American")
;
```

The part of `(first_name, last_name, nationality)` need to be exactly the names of the columns. Keep also in mind that the order matters for the `VALUES`.

Go to `Browse Data` tab to check out the table.

You can kee adding rows by executing the same command with different values:

```sql
INSERT INTO writers
  (first_name, last_name, nationality)
VALUES
  ("Ernest", "Hemingway", "American"),
  ("William", "Burroughs", "American")
;
```

### Updating data

The clause to update a row is `UPDATE`:

```sql
UPDATE writers
SET first_name = "Leo"
WHERE
  last_name = "Tolstoy"
;
```

### Deleting data

The clause to delete data is `DELETE`:

```sql
DELETE
FROM
  writers
WHERE
  first_name = "William"
;
```

### Create a table with a relationship

A table with a relationship is nothing more than a table. You just need to define the relationship when you create the table:

```sql
CREATE TABLE books (
  id integer PRIMARY KEY,
  title text UNIQUE NOT NULL,
  author_id integer NOT NULL,
  FOREIGN KEY(author_id) REFERENCES writers(id)
);
```

The statement to create the table has the same parts as any simple table, except for the last row:

```sql
FOREIGN KEY(author_id) REFERENCES writers(id)
```

This line defines the relationship of one column `author_id` with a column from another table `writers(id)`.

Go ahead and add the books we commented in the [relational article](./relational.md). Add the books in the one-to-many relationship. Not in the many-to-many relationship.

### Browse the database

Now you can take a look at your database in `Browse Data` tab.

## Create Schema

Your task now is to define the schema. Only the schema. No need to create it in the software used below.

Either write the schema on paper or in [this](https://www.dbdesigner.net/designer) online tool

The schema will be the database for a bookshop.

The requirements of the bookshop are as follow:

* The bookshop has books. Each book has a title, a price and an ISBN.
* There are writers. Each writer has a name and birth date.
* A book can have more than one writer. A writer can have more than one book.
* There are book categories. The category has only a title.
* A book can have more than one category. A category can be in more than one book.
* The bookstore has also customers. Each customer has a name and email
* There are sales. The sale has a date.
* A sale has one customer. A customer can be in many sales.
* A sale has a book. A book can be in many sales.

You can find a solution [here](../../solutions/databases/bookshop-schema.pdf).

### Bonus Requirements

* You can sell more than one book per sale. More than once the same book in the same sale.
* Sale can have a discount.
* Book prices have currencies. There can be different prices per currency.
