# Environments and deployment

## Introduction

Imagine that developer changes affect directly the users. In that scenario, the developers would have to be sure that each of their changes works perfectly at any point in time. Even while in the middle of developing a feature.

Having different environments prevents that from happening.

An environment is just a copy of the project being executed not for the end users, rather for someone working for the project. A developers, tester, manager, ...

These are not all the possible environment, rather the most common ones.

Not all the projects have all these environments.

## Environments

### Development environment

The development environment is the copy of the project where the developers work and add their changes.

In this environment the project is -usually- running in the local computer.

### Testing environment

Once the changes made from the developers are finished, they need to be tried by a someone.

This is where manual testing usually comes. A new copy of the project is created where the tester is able to check whether the project works as expected.

When a problem is found a report can be made for the developer to fix it before moving on to the end user.

This environment is also used to execute the software that will test the software.

### Staging environment

This environment should be as similar to the end users as possible.

Using a copy of the production data base and the same machines and servers the end users have.

The target of this environment is not to test functionality. Rather to check that the new version works without errors in the same environment used for end users.

This is also a good environment to preview new features to selected customers or internal managers.

### Production environment

This is the environment where a copy of the software is running for the end users.

Installing or setting up the production environment for your software is called **deployment**.

Deployment is the most sensitive step in most projects.

## Deployment

Software deployment is all of the activities that make a software system available for use to the end user.

Each project has a different set of deployment steps.

### Pre-Internet

In pre-internet software deployments (and their closely related cousin, new software releases) were of necessity expensive, infrequent, bulky affairs.

An example of a pre-internet deployment is creating a CD with the software to install it.

### Present

Thanks to Internet, deployment of software is not as expensive as it used to be.

There are plenty of technologies and tools to help with this process.

In a website it means that when a user visits the page after a new deployment the new page will be available.

For a mobile application the user needs to update the app in the store. Although it is becoming more common that the updates are done automatically as soon as they are available.
