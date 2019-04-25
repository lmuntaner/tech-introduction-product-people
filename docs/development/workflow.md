# Development Workflow

## Introduction

We will focus on the development workflow using a Distributed Version Control System such as Git.

The development workflow includes from the first change of a developer, until it has been merged into the main branch of a repository. Usually `master` branch.

It doesn't include publishing those changes to the end users. That is explained in [environments and deployment](./environments.md).

## Workflow

There might be a few concepts that are not very familiar at the moment and will make sense with the hands-on project.

1. Create a branch
2. Make changes
3. Create a commit
4. Push your changes to the remote repository
5. Create a Pull Request (bad name, some call it Merge Request) and ask for a Code Review
6. Discuss the changes
7. Commit and push new changes if necessary (very often, also more than once)
8. Reviewers accept the Pull Request
9. Pull Request gets merged into the master branch
10. Start again

[Visual guide to a development workflow](https://guides.github.com/introduction/flow/)

## Best Practice

The best practice is to avoid changing a lot of code at once. Changes should be small so that the Code Review can be done in only a few files.
