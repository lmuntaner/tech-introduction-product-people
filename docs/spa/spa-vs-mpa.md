# SPA and MPA rendering

## Putting it all together

You have learned about single or multiple page applications. You have also learned about rendering and the different types of rendering.

In this article we will put all those concepts together.

How are they combined? Which are the advantages and disadvantages of each of them?

There is no good or bad answer. There are just advantages and disadvantages. Which means that depending on the project, some advantages are more important than others.

Understanding the different ways to develop a website or web application is the important takeaway in this module.

## Recap

### Single Page Application

Single Page Applications are those web applications that feel like desktop applications. Interacting with them feels native and smooth.

You want to build a SPA when your application has a lot of interaction with the user.

### Multiple Page Application

It feels more like regular websites. Navigating from one page to another one needs a full refresh.

Even though we define a clear differentiation here, the line between a SPA and a MPA is blurry. A MPA might have some functionality that feels native and smooth. While some pages in SPA might need a full refresh.

### Client side rendering

It is called client side rendering when the user receives an empty html file and the content is created there with Javascript.

This means that the client needs to be able to execute Javascript.

This might be a problem for some SEO. Some search engine crawlers take longer to index the content of SPA and some others might never index it.

Client side rendering is never an option for multiple page applications. It is only used in SPAs.

### Server side rendering

This means that every time the client makes a request to a server, the server creates the html on the fly.

Usually because it needs to go to the database to get some data to create the html file.

Both SPAs and MPAs can have server side rendering

### Build time rendering

If the website that we build is about content and the content hardly changes, the html files can already be created and served when requested.

This means that the only job of the server is to send files. It doesn't need to create an html file on the fly. Those are called static files.

The server in this case is a dummy server sending files with no business logic. This architecture is a good choice when you want to avoid server costs.

Those static files are created at some point, with some task. This task is usually known as the build task. It builds the files. Hence the name, build time rendering.

This can be done for both SPA and MPAs.

## Summary Table

Here is a summary table with examples:

- | Client Side Rendering | Server Side Rendering | Build Time Rendering
----- | ----- | ----- | -----
SPA | [Twitter](http://twitter.com) | [Jet.com](https://jet.com) | [React Blog](https://reactjs.org/)
MPA | n/a | [Atlassian Jira](https://www.atlassian.com/software/jira) | [xkcd webcomic](https://xkcd.com/#)
