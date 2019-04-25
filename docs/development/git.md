# Git

## Introduction

Install git following [this guide](https://www.atlassian.com/git/tutorials/install-git).

Read [this](http://rogerdudler.github.io/git-guide/) git tutorial. Until *Tagging*.

## Your first repository

Create a folder, for example call it `git-demo`. Navigate to it with the terminal.

Once in the terminal, make sure you are in the folder, when running `pwd` you see something like this:

```shell
XXX/XXX/XXX/XXX/get-demo
```

### Create a repository

```git
git init
```

Run `git log`:

```shell
fatal: your current branch 'master' does not have any commits yet
```

Now we need to add our first commit.

### Add your first commit

Open the folder with a text editor.

Create a file called `notes.md`. We are going to write some notes there.

Write something like `Hello this is some example text.`.

Go to the terminal and run `git status`.

You might see something like this:

```shell
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	notes.md

nothing added to commit but untracked files present (use "git add" to track)
```

This is telling you that there are changes that have not been staged and cannot be committed yet.

To add the changes to the staging area run:

```git
git add notes.md
```

Run `git status` again:

```shell
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   notes.md

```

Now there are *Changes to be committed*.

Commit with a message:

```git
git commit -m 'First commit message'
```

You will get something like this:

```shell
[master (root-commit) d12e8d2] First commit message
 1 file changed, 1 insertion(+)
 create mode 100644 notes.md
```

You you check the logs with `git log`:

```shell
commit d12e8d2c5a8e438a8108967e5c336ee037db7df4
Author: <your username and email maybe>
Date:   Wed Apr 24 12:01:54 2019 +0200

    First commit message
```

Press `q` to exit this screen.

### Second commit

Go ahead and do some changes in `notes.md`.

Use `git status` once in a while to see what is going on.

Then commit this changes:

```git
git add notes.md
git commit -m 'second commit'
```

If you run `git log` you should see two commits.

### First branch

By default you are in the `master` branch. You can see that when running git status:

```shell
On branch master
```

Create a branch. Let's call it `hidden-data`.

```git
git branch hidden-data
```

You are still in `master` branch after creating a new one. You need to check in the new branch:

```git
git checkout hidden-data
```

Now when you run `git status` you get

```shell
On branch hidden-data
```

Your commits will be applied to this branch.

Add the following sentence `This is hidden in master` in `notes.md`.

Add and commit those changes:

```shell
git add notes.md
git commit -m 'Changes in another branch'
```

### Merge into master

Go back to the `master` branch now.

```git
git checkout master
```

Open the file `notes.md`. The sentence `This is hidden in master` is not there.

That is because it was committed in the other branch. The branch you are in doesn't have the changes there.

Check out `git log`. The commit done in `hidden-data` is not there.

We need to merge our first branch `hidden-data` to `master`.

To do that, you need to be checked out in the branch we want to merge into. In this case `master`.

Then you run:

```git
git merge hidden-data
```

If you open `noted.md` you should now see the sentence there.

Run `git log` as well.

## Conclusion

This functionality you have just just practiced of *adding*, *committing* and *branching* is the minimum needed to have a nice development workflow.

Having commits allows us to go back to any point in history. Anytime we want.

Using the branching features, allows developers to work in parallel in the same project in different features and then put things together.
