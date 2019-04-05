# Save Westeros

You are Daenerys Targaryen and have to save Westeros from The Night King!

WINTER IS COMING!

## Game's Interface

The interface of the game is an API. You play by sending requests to it.

## Object of the game

You need to kill the Night King.

## Login

In order to play you need to *login* the API.

You need to get a token by sending a `username` and a `password` to the required endpoint:

```shell
https://us-central1-gimtec-tech-notes.cloudfunctions.net/login
```

You will need to send a `POST` request. You need to send JSON as body:

```json
{
  "username": "<some-username>",
  "password": "<some-password>"
}
```

*Remember that to be able to send JSON you will need to add the proper `Content-Type` header`.*

You will be provided a user or just ask for one by contacting the me.

### Login Response

In the response of the login you fill find some information already.

```json
{
  "username": "Daenerys The White",
  "region": "The North",
  "token": "<long-token>"
}
```

You will have the token needed to play. You need to include it in every request you do.

The header name is `Authorization` and the value is just the token received.

You also have where does Daenerys start her quest.

## Getting Started

Once you have the token you can start playing the game.

### Map

Daenerys starts in a specific regions and need to move in the map to perform the challenges.

The map is more or less similar to [this](https://awoiaf.westeros.org/index.php/File:Agot_hbo_guide_map.jpg). In case you are not very familiar with the TV Show or the Books.

### Initial Region

By doing a GET request you can see where you are. The url to play after logging is:

```shell
https://us-central1-gimtec-tech-notes.cloudfunctions.net/play
```

An example of a response is this one:

```json
{
  "region": "The Riverlands",
  "message": "No one is here. Everybody has left. Winter is coming!"
}
```

### Move

You have 8 directions to move:

* North with `n`
* South with `s`
* East with `e`
* West with `w`
* North-East with `ne`
* North-West with `nw`
* South-East with `se`
* South-West with `sw`

You need to send your movements in a custom header.

The name of the header is `movements`. You can send more movements by adding `,` in between. For example: `s,s,ne` for moving south, south and north-east. 

By sending a set of movements, you receive information about the other regions.

### Special Regions

Some regions have characters from the Books waiting for you. These will be explained below.

An example of response when the region has a character is:

```json
{
  "region": "The North",
  "message": "Tyrion Lannister: Question or proposal before giving you a hint"
}
```

## Objective of the game: Kill The Night King

You need two things:

* Which movements you need to get to him. In which region is he hiding.
* Request prerequisites. Which method, body, headers or query params you need to kill him.

### Finding him

To find him there is no other way than doing requests with `movements` and checking the regions until you find him.

There might be some movements that take you out of the map or nowhere. The API should warn you about those.

### Request prerequisites

Once you know the movements to get to the Night King you need to kill him.

You need to do the right request:

* Which HTTP Method?
* Does it need some body?
* Some special header?
* Any additional query parameters?

### Challenges

The prerequisites are giving to by solving other challenges.

#### Join Jon Snow

When you find him, he will tell you how to join forces with him to kill The Night King.

An example is that he might tell you which query params you need to pass if you want to kill The Night King.

#### Party with Tyrion

Same deal. Find Tyrion. He will tell you how to party with him.

Then he will give you information about how to kill the Night king.

#### Borrow money from the Iron Bank

You need to find the emissaries of the Iron Bank and borrow money from them.

#### Flatter Cersei

Last but not least you need to deal with Cersei.

Good luck with that one!

## Conclusion

Remember that each request is Stateless. Which means that it doesn't remember where you are.

**You always start from the beginning.**

You need to send always the movements from the initial region.

Good luck and remember **WINTER IS COMING!**
