# Introduction to Single Page Applications

## What it is

A Single Page Application (SPA for short) is a special kind of website.

It's a website where the user doesn't see any reload while interacting with the page. The website feels like a native desktop application.

In order to accomplish this, SPA rely heavily on Javascript. Javascript will handle all interaction with the server and change the content in the page without reloading.

SPAs are (usually) heavy on the first load of the page since the browser needs to download everything. Afterwards interactions are much faster and feel natural.

We will see how the HTML sent by the server can be just an empty `<div>` which Javascript will populate with all the content of the page.

This doesn't mean that a SPA has only one page. The user still can visit many pages, however, they are not retrieved from the server. It is Javascript that changes all the content in the HTML and replaces it with the content on the new page.

Even though this may seem slower and heavy, it is much smoother than requesting the whole page to the server.

Trello, Gmail or Google Maps can be considered SPAs.

## What it is NOT

Go to a blog page -[xkcd](https://xkcd.com/566/)- and navigate from one page to another by clicking on *previous* or *random*.

You can see a full refresh of the page each time. Even though the header nor the footer change.

Every time that you click a link, the browser process starts again. It is as if you wrote the url in the address bar and pressed enter.

These are also called Multi Page Applications. They are the traditional websites and are still the most common.

## Problems with SEO and SPAs

SPAs are (by default) not very friendly with Search Engine Optimizations.

As we explained earlier, the HTML sent by the server is -by default- an empty `<div>`. The content is loaded afterwards with Javascript.

Some crawlers cannot execute Javascript. If a crawler cannot execute javascript, it means that it will never see the full content of the page.

Other crawlers such as the one by Google can execute javascript. However, the content indexing will take longer than in a regular multi page application.

There are different solutions to this problem:

* Create specific HTML pages that will be served only to the crawlers
* Render the HTML in the server before sending it. We'll dive deeper [here](./rendering.md).

More about SPAs and SEOs in [this](https://www.youtube.com/watch?v=LXF8bM4g-J4&list=PLKoqnv2vTMUPOalM1zuWDP9OQl851WMM9&index=2) series of videos.
