# History

Explaining history as a set of steps is never accurate. However, I am not aiming for accuracy, but rather for an understanding better the current situation by comparing it to the past.

By taking a look at how it was done in the past, we can better understand how it is done in the present.

## On Premise Data Center

As said at the beginning, a server is just a computer. That computer is usually used only for the purpose of being a server.

When a company wanted to create a website or some business on the internet, they would buy a computer and connect it to the internet. Usually that computer would be in some room for its own.

If the website was a success and your server was not enough to keep up with all the requests, you could buy a bigger computer. Or buy another computer just for the database. There were different strategies to scale.

The most important takeaway here is that the company developing the website was also responsible for buying, maintaining, scaling and managing the hardware.

The room with the computers was getting bigger and bigger. Becoming in the end a Data Center.

## Shared Data Centers

Some companies realizing how painful it was to manage the computers, started selling the usage of a physical computer in their own Data Centers.

That meant that the company didn't need to buy the computers. You could just pay for the usage of one. This made it easier to scale.

* No need for investment in computers
* No need for physical space in the offices

In this state, the team working on the website didn't need to buy computers or maintain the hardward, but they still needed to set them up, choose computers and rent more if they wanted to grow.

## Cloud Computing

After sharing data centers it came the Virtualization of Data Centers. Also known as Cloud Computing.

The service now was not to sell the usage of a computer, but rather the usage of computer power and storage.

Users of Cloud Computing do not choose a specific computer to put their sever. They buy instead compute power and database storage.

Great [article](https://aws.amazon.com/what-is-cloud-computing/?nc1=f_cc) by Amazon Web Services on what is Cloud Computing. 5 min read.

At this point, the team working on the website, only needs to choose the compute power and storage. No need to buy or select specific computers.

However, the team still needs to setup the server and run it in a virtual computer with some specifications. If they want to scale, they need to buy more compute power or storage.

This virtualization of the resources is possible thanks to [Virtual Machines](./vms.md) and [Containers](./containers.md).

## Serverless or Functions-As-A-Service (FaaS)

Which brings us to the current trend of Serveless architecture.

This trend has made populate when Amazon Web Services released a new service called Lambda Functions.

The service now is not about selling compute power, or storage. Not even selling a piece of a computer you can set up.

The service now is selling executions of a function. A simple function like the ones learned in the prework or the first module.

The client pays per executions of the functions.

We go deeper in the [functions](./functions.md) notes.

## Fun fact

![Lock in vs serverless](https://www.trek10.com/blog/img/lockin.jpeg)
