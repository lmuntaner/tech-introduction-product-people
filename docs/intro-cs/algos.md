# Algorithms

An introduction to algorithms.

## Introduction

An algorithm is a set of steps to perform a calculation or solve a problem.

### Find the number

Let's say that we have a list of sorted numbers: 1, 2, 10, 14, 23, ...

We need to find whether the number 56 is there or not.

**One solution:** Start from the first number, until you either find 56 or a higher number.

## Complexity

When performing a task, there are always many different ways to solve it. Some ways to solve might be faster than others.

To describe how long it takes to solve a problem computer scientists use a concept called Time Complexity.

It is an estimation of how many steps are needed to solve the problem.

These steps are usually dependent on the size of the input data used.

### Find a number: Time Complexity

Which is the Time Complexity of our previous problem?

We need to go number by number comparing it.

Maybe it's the last number. Which means that in the worst case scenario we need to go over all the numbers.

If we know that the list has N numbers, then the Time Complexity is N.

### Find a number: Another solution

Let's think of another solution to solve this problem.

Since we know that the list of number is sorted. We could go to the middle of the list. If that number is greater than the one we are looking for, we know it's on the left side. Otherwise on the right side.

If we know it's either left or right side, we can then search only there. Go to the middle of that side and do the same.

We keep doing this, checking the middle number within a subset of the list until we finally find the number. That or we find a smaller and greater numbers together. Which would mean that the number we are looking for is not in the list.

This algorithm is more complicated to understand and to implement.

However, the time to solve it is MUCH faster, because we don't need to go over all the numbers.

In this case, the Time Complexity of this algorithm is logarithm of base 2 of N.

## Why are algorithms so important?

Let's assume that we have 1 Million numbers and that comparing each number takes es 1 second.

With the first algorithm, finding a number might take us 1 Million seconds. That's a little more than 11 days.

With the second algorithm, it would take us 20 seconds maximum. The logarithm with base 2 of 1 Million.

**With one algorithm it would take use 11 days, with the other one seconds.**

This is why algorithms are so important. The more data you have, the more important is the performance of your algorithm.
