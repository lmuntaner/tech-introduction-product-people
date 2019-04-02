# How does the Internet work?

## From computer to computer

Internet is this huge network of networks connected to each other. How does our computer know to which other computer ask for information?

Everything starts with the URL. It is the human form of the address of the computer.

The URLs need to be translated to a numerical address of the computer called **IP Address** (or Internet Protocol Address).

Once our computer has the IP address it sends a request. Then the other computer will reply with the data.

## DNS

The process of looking up the IP Address based on the URL is called the DNS lookup.

DNS or Domain Name System is a like a huge phone book translating this URLs to IP addresses.

There are computers connected on the Internet whose only job is to server this information.

<!-- 1. Browser DNS cache 2. OS cache 3. Call DNS server which local router/ ISP router -->

## Internet connection models

There are two main strategies to connect to another computer.

* Client to server model. Most common.
* Peer-to-peer model.

### Client to server model

In the *client to server* model there are different roles.

The clients request information.

The servers are computers that have and share the information with the clients.

![Client server](https://upload.wikimedia.org/wikipedia/commons/f/fb/Server-based-network.svg)

In this strategy, the clients do not share resources nor information with the other clients or with the server.

This does NOT mean that the Internet is a centralized structure. This means that the strategy of communication among most computers follow this convention.

Most computers connected to the Internet are clients, which only request data but don't share their resources.

Whereas there are many other computers connected whose job is to wait for incoming requests and send the requested information to the clients.

Examples of this strategy are:

* World Wide Web
* Emails
* Printing network in a company

### Peer-to-peer model

In a peer-to-peer model there are no different roles for the computers connected to it.

Every computer connected shares resources and data at the same time that can request them.

![Peer to peer](https://upload.wikimedia.org/wikipedia/commons/3/3f/P2P-network.svg)

There is not a central coordination or central power. The connected computers work together following a set of defined standards.

A connected computer is called a Peer.

## Fun fact

The DNS started as a [text file](https://en.wikipedia.org/wiki/Domain_Name_System#History) in The Stanford Research Institute. Addresses were assigned manually contacting the center by phone.

This method soon was out of control and decided to create something more scalable.