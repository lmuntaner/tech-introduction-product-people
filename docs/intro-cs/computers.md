# Computers

Let's take a look first at the computers.

## Definition

Wikipedia describes a computer as:

> A device that can be instructed to carry out sequences of arithmetic or logical operations automatically

The definition might be a little too abstract. Let's break it down.

There are two main concepts to understand: *device* and *operations*.

### Device

By *device* wikipedia means the hardware.

Two pieces are the ones performing the *operations*.

* The CPU or Central Processing Unit, where the instructions are performed.
* The Memory where information can be stored.

All the other hardware such as a monitor, speakers or keyboard is considered peripheral equipment.

### Operations

The *operations* are just the software that runs in the computer.

The actual steps needed to get to the result. It can be calculating a new number, storing it somewhere for later use, etc.

More technically, the [algorithm](./algos.md) to solve or perform the task.

## 1s and 0s

It's not a myth that computers only understand 0s and 1s. That's how ALL operations are translated into in the end.

> All modern CPUs represent numbers in binary form, with each digit being represented by some two-valued physical quantity such as a "high" or "low" voltage.

CPUs and Memories are a HUGE set of small circuits with "lightbulbs" which are either ON or OFF. With these set of "lighbulbs" we can represent everything you see in a screen. From text to images.

## From Binary to the real world

How can a device that only understand 1s and 0s process and represent everything we see on a screen?

The answer is with many standards and layers of abstraction.

### Decimal base

Numbers written in the Decimal Base can be easily represented in binary.

* 14 -> 1110 -> (1 * 2<sup>3</sup>) + (1 * 2<sup>2</sup>) + (1 * 2<sup>1</sup>) + (0 * 2<sup>0</sup>) = 8 + 4 + 2 + 0
* 1984 -> 11111000000
* 255 -> 11111111

### ASCII

> American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers.

This is how computers represent text and characters in memory and in the CPU.

A few examples of ASCII code:

* 72 -> H
* 33 -> !

[List of Standard Characters](https://ascii.cl/)

### RGB

How about colors? We can also represent colors with numbers.

RGB is a model where the colors Red, Green and Blue (hence the name) are combined together to create a list of other colors.

Typically they are represented with 3 numbers from 0 to 255.

## Bits and Bytes

A Bit is this basic unit of ON or OFF. With 8 Bits you can have the numbers from 0 to 255.

255 is the highest number you can get with 8 digits using the binary system.

A Byte is a unit of information. It is a set of Bits representing a binary number. Historically a Byte was a set of 8 Bits.

Computers used Bytes to represent a single character. That meant that you could only have 256 characters when the Bytes had only 8 Bits.

Now most machines use more than 8 Bits to store characters. Allowing for more characters than just 256.

## Fun fact

More of a myth than a fact.

The term bug has its origin in 1947. Back then the computers worked with punch cards (cards with holes). The Software was a set of cards with holes in it. The computer would process them and get the result of the computation.

A researcher at Harvard was working with a computer and at some point it stopped working properly.

The researcher went to the computer -which was pretty big since it had to actually handle lots of punch cards- and found that the problem was a moth -the bug-. The moth got inside the machine and it crashed.

![First Bug](https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg)

The researcher wrote in the log book how the computer was not working because there was a BUG in it.

*The real story is less funny. See it [here](https://en.wikipedia.org/wiki/Software_bug#Etymology).*
