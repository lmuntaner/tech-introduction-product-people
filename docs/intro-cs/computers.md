# Computers

## Definition

Wikipedia describes a computer as:

> A device that can be instructed to carry out sequences of arithmetic or logical operations automatically

The definition might be a little too abstract.

The device is the hardware. Specifically:

* Central Processing Unit or CPU, where the instructions are performed
* Memory where information is stored

The set of operations is the software that runs in the computer.

## How does it work?

It's not a myth that computers only understand 0s and 1s. That's how ALL operations are translated into in the end.

> All modern CPUs represent numbers in binary form, with each digit being represented by some two-valued physical quantity such as a "high" or "low" voltage.

CPUs and Memories are HUGE set of small circuits with a few "lightbulbs" which are either ON or OFF. With these set of "lighbulbs" we can represent everything you see in a screen. From text to images.

## From Binary to the real world

How can a device that only understand 1s and 0s process and represent everything we see on a screen?

The answer is with many standards and layers of abstraction.

### Decimal base

Numbers written in the Decimal Base can be easily represented in binary.

14 -> 1110
1984 -> 11111000000
255 -> 11111111

### ASCII

This is how computers represent text and characters in memory and in the CPU.

> American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers.

72 -> H
33 -> !

[List of Standard Characters](https://ascii.cl/)

### RGB

How about colors? We can also represent colors with numbers.

RGB is a model where the colors Red, Green and Blue (hence the name) are combined together to create a list of other colors.

Typically they are represented with 3 numbers from 0 to 255.

## Bits and Bytes

A Bit is this basic unit of ON or OFF. With 8 Bits you can have the numbers from 0 to 255.

A Byte is a unit of information. It is a set of Bits representing a binary number. Historically a Byte was a set of 8 Bits.

Computers used Bytes to represent a single character. That meant that you could only have 256 characters when the Bytes had only 8 Bits.

Now most machines use more than 8 Bits to store characters. Allowing for a more characters than just 256.

## Fun fact

Or in this case more of a myth.

The term bug has its origin in 1947. Back then the computers worked with punch cards. The Software were punch cards with holes in it. The computer would process them and get the result of the computation.

A researcher at Harvard was working with a computer and at some point it stopped working properly.

The researcher went to the computer -which was pretty big since it had to actually handle lots of punch cards- and fond that the problem was a moth -the bug-. The moth got inside the machine and was causing the computer to stop working.

![First Bug](https://upload.wikimedia.org/wikipedia/commons/8/8a/H96566k.jpg)

The researcher wrote in the log book how the computer was not working because there was a BUG in it.

*The real story is less funny. See it [here](https://en.wikipedia.org/wiki/Software_bug#Etymology).*
