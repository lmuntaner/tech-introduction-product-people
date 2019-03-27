# Programming Languages

## Definition

It is a human made language to write instructions for a computer.

It is used to write Software.

Computers don't understand human language. And humans don't understand computer language.

A programming language is the bridge between -some- humans and the computers.

It is how humans can tell computers what to do.

## Compiler

Transforming one programming language into another language is called Compilation.

Compilers are computer programs that perform this translation.

A Compiler usually translated the programming language to a machine code. They create an executable program.

### Executable

An executable is a file or program written in a language that the computer can understand.

**Assembly language** is any low level programming language where the instructions can be understood by the computer.

### Transpiler

A transpiler is more commonly known as a Compiler between two high level programming languages.

Also called source-to-source compiler.

For example, Typescript is transformed into Javascript

## Two types of classifications

### Low level and High level programming languages

High level programming languages have a lot of abstractions from the details of the computer it will run.

The more abstraction the more high level is a programming language.

On the other hand, a low level programming language is closely related to the architecture of the computer where it is executed.

An example of an abstraction could be memory management. In a high level, you do not care about where the computer stores the data, or when it needs to be cleaned or reused.

### Typed vs untyped languages

Another type of classification of programming languages is typed vs untyped.

In programming languages, different values can have different types. The type use tightly coupled with how much memory is needed to store that value. For example, if we store a number or a text, the memory allocation is different.

In some languages, the developer needs to specify the type of all the possible values.

An example in Typescript. A typed language that transpiles to Javascript:

```typescript
const user: string = "Jane User";
```

The added `: string` in front of the variable tells the computer that `user` will always have a `string`.

In this specific case, the value can be inferred. The developer doesn't need to tell the type of each value.

However, in this case it is necessary:

```typescript
function greeter(person: string) {
  return "Hello, " + person;
}
```

This example is much better. It's an example of how typed languages help developer. The parameter expected in `greeter` needs to be a `string`.

This means that when executing this code, if in another part of the code we do the following:

```typescript
greeter(10);
```

The computer will stop the execution and tell us that it cannot be executed. Since we are passing a `number` instead of a `string` to the function `greeter`.

## Markup languages

HTML is not considered a programming language.

HTML is a Markup language, XML is another example of a Markup language.

Markup languages define the structure of some data. They don't define instructions.

### CSS

CSS is not considered a programming language either.

It is a Style Sheet language.

A Style Sheet language is used to define how to present structured data.

## Fun fact

Javascript was officially called LiveScript when it was first releaser.

However, it was renamed to JavaScript in a later release. It was a marketing trick to take advantage of the hype around Java at the time.