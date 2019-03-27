# Algorithms and Data Structures

## Algorithms

Algorithms are the set of specific steps to perform a calculation or solve a problem.

### Find a number

Let's say that we have a list of sorted numbers: 1, 2, 10, 14, 23, ...

We need to find whether the number 56 is there or not.

**Solution:** Start from the first number, until you either find it or find a higher number.

## Complexity

When performing a task, there are always many different ways to solve it.

However, some ways to solve might be faster than others.

To describe how long it takes to solve a problem computer scientists use a concept called Time Complexity.

It is estimated of how many steps you need to take to solve the problem.

These steps are most of the time dependent on the size input data used.

### Find a number: Time Complexity

Which is the Time Complexity of our previous problem?

We need to go number by number comparing it.

Maybe it's the last number. Which means that at the most we might need to go over all the numbers.

If we know that the list has N number, then the Time Complexity is N.

### Find a number: Another solution

Let's think of another solution to solve this problem.

Since we know that the list of number is sorted. We could go to the middle of the list. If that number is greater than the one we are looking for, we know it's on the left side. Otherwise on the right side.

If we know it's either left or right side, we can then search only there. Go to the middle of that side and to the same.

We keep doing this, checking the middle number within a subset of the list until we finally find the number, or we find a smaller and greater one together. Which would mean that it doesn't exist.

This algorithm is more complicated to understand and to implement.

However, the time to solve it is MUCH faster.

Since we don't need to go over all the numbers.

In this case, the Time Complexity of this algorithm is log of N.

### Compare Time Complexities.

Let's assume that we have 1 Million numbers.

Comparing each number takes es 1 second.

With the first algorithm, finding a number might take us 1 Million seconds. That's a little more than 11 days.

With the second algorithm, would take us maximum only 20 seconds. The logarithm with base 2 of 1 Million.

**With one algorithm it would take use 11 days, with the other one seconds.**

This is why Algorithms are so important. Specially when the input you are dealing with is very big.
