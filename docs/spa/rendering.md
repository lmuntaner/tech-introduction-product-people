# Rendering

## What is rendering

In a SPA, we call *rendering* the process of creating the HTML page that the user eventually sees.

Recall that the html in SPAs start with an empty `<div>`. At some point of the execution of the Javascript code, there will be the rendering process.

The rendering process explained here is regarding SPAs.

We can consider Multi Page Applications as using either Server Side rendering or Runtime rendering.

## Client Side rendering

This is when the rendering process happens in the client. This means that the client needs to be able to execute Javascript.

The client can be a browser or a crawler. Browsers have no problem executing Javascript, crawlers might.

This also means that it takes longer for the user to see the content in the page. It has to wait for it to be loaded.

A technology using this method (by default) is any framework such as React or VueJS.

## Server Side rendering

Everything starts with the client sending a request to a server.

The sever can respond with an empty HTML or create the HTML before sending it, old style.

In **server side rendering**, the html is populated in the server and sent to the client. Once in the client, the Javascript is also executed like in the client side rendering, but this time it only needs to synchronize with the html, not render everything.

A technology using this method is [NextJS](https://nextjs.org/)

## Runtime rendering

Another option would be to have a step before publishing your website where you build all the html pages.

As we have seen, SPA might not make sense for blogs or static pages. However, we might still want to use the technologies and frameworks for SPA without creating a SPA.

In this case, the developer can still work with React or VueJS but instead of starting with an HTML page, it will create all the HTML pages at once.

Once the html pages are created, the server will send them. They will not be rendered in the server either, since they are already there.

A technology using this method is [GatsbyJS](https://www.gatsbyjs.org/).