# Introduction to Single Page Applications

## What it is

A single page application (SPA for short) is a special kind of website.

It's a website where the user doesn't see any reload while interacting with the page. The website feels like a native desktop application.

In order to accomplish this, SPA rely heavily on Javascript. Javascript will handle all interaction with the server and change the content in the page without reloading.

SPAs are (usually) heavy on the first load of the page since it needs to download everything needed. Then further interactions are much faster and feel natural.

We will see how the HTML sent by the server can be just an empty `<div>` which Javascript will populate with all the content of the page.

This doesn't mean that a SPA has only one page. The user still can visit many pages, however, they are not retrieved from the server. It is Javascript that changes all the content in the HTML and replaces it with the content on the new page.

Even though this may seem slower and heavy, it is much smoother than requesting the whole page to the server.

Examples of SPA are Trello, Gmail or Google Maps.

## What it is NOT

Go to a blog page, for example [xkcd](https://xkcd.com/566/) and navigate from one page to another by clicking on previous or random.

You can see a full refresh of the page each time. Even though the header doesn't change, nor the footer.

Every time that you click a link, the process starts again. It is as if you wrote the url in the address bar and pressed enter.

These are also called Multi Page Applications. They are the traditional websites and are still the most common.

## Problems with SEO and SPAs

SPAs are (by default) not very friendly with Search Engine Optimizations.

As we explained earlier, the HTML sent by the server is an empty `<div>`. The content is afterwards loaded with Javascript.

Some crawlers cannot execute Javascript. If a crawler cannot execute javascript, it means that it will never see the full content of the page.

Other crawlers such as the one by google can execute javascript. However, the content indexing will take longer than in a regular multi page application.

There are different solutions to this problem:

* Create specific HTML pages that will be server to the crawlers only
* Render the HTML in the server before sending it. We'll dive deeper [here](./rendering.md).

More about SPAs and SEOs in [this](https://www.youtube.com/watch?v=LXF8bM4g-J4&list=PLKoqnv2vTMUPOalM1zuWDP9OQl851WMM9&index=2) series of videos.
