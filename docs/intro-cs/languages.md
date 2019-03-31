# Programming Languages

## Definition

It's a human made language to write instructions for a computer.

It's used to write software.

Computers don't understand human language. And humans don't understand computer language.

A programming language is the bridge between -some- humans and the computers.

It is how humans can tell computers what to do.

## Compiler

The process of transforming from one programming language into another language is called Compilation.

Compilers are computer programs that perform this translation.

A Compiler usually translates the programming language to machine code. They create an executable file.

### Executable

An executable is a file in the language of the computer.

**Assembly language** is any low level programming language where the instructions can be understood by the computer.

### Transpiler

A transpiler is more commonly known as a Compiler between two high level programming languages.

Also called source-to-source compiler.

For example, Typescript is transpiled into Javascript

## Interpreter

Some languages do not need an executable to be run.

That's because they are compiled and executed on the fly.

This compilation and execution is performed by an **interpreter**.

An interpreter is a piece of software that read, compiles and executes code.

For example, all the browsers have embedded an interpreter. This interpreter is responsible for executing the Javascript code in the Website.

## Two types of classifications for programming languages

### Low and High level programming languages

High level programming languages have a lot of abstractions. They do not care into which computer they will run on.

An example of an abstraction could be memory management. In a high level language, you don't care where the computer stores the data and when or whether it needs to be cleaned or reused.

The more abstractions the more high level a language.

On the other hand, a low level programming language is closely related to the architecture of the computer where it is executed.

Lower level programming languages have usually better performance than high level. However, it comes with a cost since they are more complex to write.

### Typed vs untyped languages

Another type of classification of programming languages is typed vs untyped.

In programming languages, different values can have different types. Examples of types are, `string`, `number`, `boolean`, ...

The type is tightly coupled with how much memory is needed to store that value. For example, if we store a text or a boolean, the memory allocation is different. How many bits you think are needed for a `boolean`? Just 1. On for `true` and OFF for `false`.

In some languages, the developer needs to specify the type of all the possible values.

Typed languages allow the devleopers to catch some errors before they are executed. They are more robust to bugs. However, they are also more cumbersom to write.

Everything comes with tradeoffs.

## Markup languages

HTML is not considered a programming language.

HTML is a Markup language, XML is another example of a Markup language.

Markup languages define the structure of some data. They don't define instructions. That's why they are not considered a programming language.

### CSS

CSS is not considered a programming language either.

It is a Style Sheet language.

A Style Sheet language is used to define how to present structured data.

## Fun fact

Javascript was officially called LiveScript when it was first released.

However, it was renamed to JavaScript in a later release. It was a marketing trick to take advantage of the hype around Java at the time.