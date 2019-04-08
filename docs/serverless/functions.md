# Functions

A function is that, just a function.

## Functions vs VMs and Containers

We cannot compare containers or VMs with a function. They are totally different.

In a VM or container you are executing a whole computer program.

In a function you only execute one function. This function is executed when some event is triggered.

An example of an event could be an HTTP request.

## Function environment

Most providers of Functions-As-A-Service or FaaS offer different environment where your functions will be executed.

You only have control over the dependencies (libraries) of your function. You do not customize the environment. Not yet at least.

## Function vs Server

A server is always running. Always listening for an HTTP Request.

The functions are idle most of the time. They will be executed when the event they are attached to is triggered.

Another example of an event is uploading a file.

## Scale

The providers of the FaaS take care of scaling. You do not need to setup how much storage or total compute power you need.

You only setup how much you want per function. The provider will replicate and scale that if there are more than one execution of the function at the same time.

## Cost

You do not pay until your function is executed.

In most cloud computing platforms you buy the compute power and storage. It doesn't matter if you use it or not.

With functions you only pay when your functions are executed. If noone comes to your website and your functions are not triggered, the cost is 0.

## Fun fact

![Serverless vs Servers](https://www.trek10.com/blog/img/below-the-surface.png)
