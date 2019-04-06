# Introduction to Serverless

## Before Serverless

### Physical servers

traditional, on-premise datacenter servers tend to be only 15 to 30% utilized

Traditional data-centers abstracted the hosting environment with limited elasticity and resource pooling. Scaling was achieved by adding more hardware.

### Cloud Computing

https://en.wikipedia.org/wiki/Cloud_computing

Cloud computing is the on demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.

Virtualized data-centers abstracted the underlying infrastructure. Scaling was achieved by allocating more compute (VMs) and other infrastructure resources.

Consumers managed the application stack, data, and OS, while the IaaS provider managed the virtualization, servers, hard drives, storage, and networking.

### Virtualization

The main enabling technology for cloud computing is virtualization.

#### Hardware virtualization or Virtual Machine

refers to the creation of a virtual machine that acts like a real computer with an operating system. Software executed on these virtual machines is separated from the underlying hardware resources. For example, a computer that is running Microsoft Windows may host a virtual machine that looks like a computer with the Ubuntu Linux operating system; Ubuntu-based software can be run on the virtual machine.

A virtual machine (VM) is an emulation of a computer system.

provide functionality of a physical computer

#### Containerization

Container runtime engines abstracted the OS.

It provided a portable runtime across OSs and a lightweight distribution & packaging mechanism for applications along with its dependencies.

Containerization promoted the micro-services architecture pattern, by encapsulating & isolating reusable functional components as services.

Consumers manage the application stack and data, while the container service provider manages the container engine, host OS, servers, storage, and networking.

Operating-system-level virtualization, also known as containerization, refers to an operating system feature in which the kernel allows the existence of multiple isolated user-space instances

Such instances, called containers, partitions, virtual environments may look like real computers from the point of view of programs running in them.

A computer program running on an ordinary operating system can see all resources of that computer. However, programs running inside a container can only see the container's contents and devices assigned to the container.

Containerization started gaining prominence in 2014, with the introduction of Docker

it wasn’t until Docker launched in 2013 with its developer-friendly container solutions and ecosystem that the technology truly gained traction

In Docker, container also refers to a package of software and dependencies that run inside a virtual user space. A file that represents such a package is called a container image

#### VMs vs Containers

Virtual Machine (VM) can be described as a software program that emulates the functionality of a physical hardware or computing system.

The virtual machine contains all necessary elements to run the apps, including the computing, storage, memory, networking and hardware functionality available as a virtualized system.

The virtualized hardware resources are pooled together and made available to the apps running on the VM. As a result, the physical hardware can be changed, upgraded or scaled without disrupting the app performance.

a workload operation consume all of the resources made available to the associated VM. As a result, the remaining unused resources many not be used incorporated in capacity planning and distribution across all VMs and workloads.

-----

Containerization creates abstraction at an OS level that allows individual, modular and distinct functionality of the app to run independently. As a result, several isolated workloads can dynamically operate using the same physical resources.

They share all necessary capabilities with the VM to operate as an isolated OS environment for a modular app functionality with one key difference. Using a containerization engine such as the Docker Engine, containers create several isolated OS environments within the same host system kernel, which can be shared with other containers dedicated to run different functions of the app.

makes them more resource efficient as compared to VMs.

With containerization, developers don’t need to write application code into different VMs operating different app components to retrieve compute, storage and networking resources. A complete application component can be executed in its entirety within its isolated environment without affecting other app components or software. Conflicts within libraries or app components do not occur during execution and the application container can move between the cloud or data center instances efficiently.

![Container vs VMs](./assets/containeres-vs-vms.jpg)

Containers sit on top of a physical server and its host OS

Containers are thus exceptionally “light”—they are only megabytes in size and take just seconds to start, versus gigabytes and minutes for a VM.

------

Virtual machines and containers differ in several ways, but the primary difference is that containers provide a way to virtualize an OS so that multiple workloads can run on a single OS instance. With VMs, the hardware is being virtualized to run multiple OS instances.

Each VM requires its own underlying OS, and the hardware is virtualized.

With containers, instead of virtualizing the underlying computer like a virtual machine (VM), just the OS is virtualized.

in practice is you can put two to three times as many as applications on a single server with containers than you can with a VM

It runs a discrete process, taking no more memory than any other executable, making it lightweight.

By contrast, a virtual machine (VM) runs a full-blown “guest” operating system with virtual access to host resources through a hypervisor. In general, VMs provide an environment with more resources than most applications need.

Docker Docs Images:

![Containers](https://docs.docker.com/images/Container%402x.png)

vs

![VMs](https://docs.docker.com/images/VM%402x.png)




#### Platform As A Service or PAAS

PaaS abstracted the management of infrastructure services, with scalability, high-availability, and multi-tenancy as it's core tenets.

Consumers managed the application stack and data, while the PaaS provider managed the OS, virtualization, servers, storage, and networking.

### Functions As A Service

Serverless computing abstracted the language runtime.

The Functions-as-a-service (FaaS) paradigm promotes self-contained, stateless chunks of code packaged into 'functions', that can be run or triggered, in ephemeral containers.

The unit of deployment is functions.

Consumers manage the application code in units of functions, while the serverless cloud provider manages the execution environment and everything else under it.

## Serverless

Serverless is a new way to approach cloud computing.

cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity

Scaling, capacity planning and maintenance operations may be hidden from the developer or operator.

vent-driven, functions based, pay-per-execution, auto-scaling serverless computing platform

never pay for idle, and don’t manage any infrastructure

Just like wireless internet has wires somewhere, serverless architectures still have servers somewhere.

it still involves servers, so that word serverless might feel a bit disingenuous. It's actually a new way to pay for and work with servers that, in many cases, is cheaper and easier than buying and managing your own servers.

Zero Administration
Pay-per-execution
Function as unit of deployment
Event-Driven (usually an HTTP Request)

### Serverless data bases



## Serverless jokes

![Serverless vs Servers](https://www.trek10.com/blog/img/below-the-surface.png)

![Lock in vs serverless](https://www.trek10.com/blog/img/lockin.jpeg)