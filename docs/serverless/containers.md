# Containers

Containers are simlar to [VMs](./vms.md).

A container also acts like a real computer. Except that it runs on top of the Operating System, instead of having its own operating system inside.

Containerization started gaining prominence in 2014, with the introduction of [Docker](https://www.docker.com/).

A container is perfect to execute a piece of software like a server. In the container the developer has full control of the configuration and dependencies where the software will run.

This creates a consistent environment for the server to run, avoiding the pain to setup a whole new environment manually everytime you need one.

Each container runs in the same operating system but the resources are isolated. Similar to VMs.

The big difference is that the resources can be allocated to different containers depending on their needs. If a container needs more storage it can take up more storage as long as the local computer has more.

More on containers in [this](https://aws.amazon.com/containers/) article by Amazon Web Services.

## Virtual Machines vs Containers

We have already described a few of the key differences:

* Containers run on top of the local OS.
* Each VM has a fix allocation of resources.
* Each VM requires its own OS. This makes them much heavier than containers.

Most important, both VMs and Containers offer **full control of the environment** were the code of the application will be executed.

An image is usually better than a thousand words:

![VMs vs Containers](./assets/containers-vs-vms.jpg)

