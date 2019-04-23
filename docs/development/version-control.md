# Version Control

## Introduction

You have probably used some kind of version control. While working on a task, have you saved the file with the date? or XX-v1, XXX_v2, or XXX_FINAL, XXX_DEFINITELY_FINAL?

In essence that is version control. At some point of your progress through a task you are happy with what you have so far and want to save it. Next time you start you might be doing something different and you decide to save it with another name in cas you want to get back to what you had before.

## Version Control System

A Version Control System or VCS is a software that helps you keep track of those version in a more accessible and easier way than renaming and saving files.

Working with a team the version control gets messier and harder to accomplish without a VCS.

The common questions that a VCS might help you answer are:

* Which changes does this version include?
* Who did those changes?
* When were they done?
* Why were they done?

I recommend you to watch [this video](https://git-scm.com/video/what-is-version-control) to learn more about VCS.

In Software development VCSs are wildly used. Almost each engineering team uses one type or another of VCS.

## Distributed Version Control System

There are different types of VCSs. However, the most common type at the moment is the Distributed VCS.

In a DVCS each member working on the project has a local copy of all the versions and history of the project.

They are then synchronized using an online service. However, they do not need a constant connection to the online service since the synchronization can be done from time to time.

### Git

Git is an implementation of a DVCS.

It is the most commonly used at the moment in the software development industry.

### What’s a repository

A repository, or Git project, encompasses the entire collection of files and folders associated with a project, along with each file’s revision history.

Working in repositories keeps development projects organized and protected. Developers are encouraged to fix bugs, or create fresh features, without fear of derailing mainline development efforts.

You will learn more by doing in the [project](./project.md).

### Repository Hosting

This are the online services used to synchronized the local repositories of the members of a team.

It is similar to Dropbox but for repositories.

[Github](https://github.com) is an example of a repository hosting service.

They provide nice collaboration features such as Pull Requests (seen later), Code Reviews or discussion boards.

The copy of a local repository in the services is also known as the **remote repository**.
