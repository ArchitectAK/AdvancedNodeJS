# AdvancedNodeJS with examples

Learn advanced techniques for asynchronous programming and data streaming in Node.js.
In this project, we will learn

- How to use asynchronous patterns such as callbacks, promises, and async/await to manage processes and enforce sequential, parallel, and concurrent execution.
- Reviewing streams, a critical feature for reading and writing data from Node applications.
- Introduction of four different types of streams—readable, writeable, duplex, and transform—and how to minimize backpressure, or buildup, in data transmission.
- How to combine the techniques and build an HTTP server for streaming video over the web.
- How to ensure the stream is cross-browser compatible and collect multipart/form-data, such as text data and files, from the upload stream.
- Powerful new toolset for building advanced, enterprise-scale applications with Node.js.

## Learning objectives

- Asynchronous patterns
- Resolving and rejecting promises
- Sequential, parallel, and concurrent execution
- Working with readable and writeable streams
- Transforming streams
- HTTP streaming

Lets get started with examples

## Aynchronous Patterns

- [Callback pattern](AsynchromousPatterns/callback-patterns/index.js) - A callback is a block of instructions wrapped in a function so that it can be invoked when an asynchronous operation has completed.
- [Resoving Promises](AsynchromousPatterns/resolving-promises/index.js) -
  - A promise is an object that can be used to represent the eventual completion of an a asynchronous operation.
  - They give us a nice way to handle what happens when a promise succeeds, using a chain of then functions.
- [Rejecting promises](AsynchromousPatterns/rejecting-promises/index.js) - If an error occurs, we can handle it with that catch method but also if we reject the Promise for any reason, we can also handle that with the catch method.
- [The promisify function](AsynchromousPatterns/promisify-function/index.js) -
  - Both promises and callbacks can be used to handle asynchronicity within JavaScript.
  - Promises make the code a little bit nicer, so Node JS comes with a way to quickly convert callback functions into promises.
  - The rule is that we pass the error as the first argument to the callback, so in this case, if errors are passed as the first argument, we can assume that they are errors and handle them. Now, if our callback functions are all structured like this, where they pass the error as t
  - The promisify method that's found in the utilities module is a great tool for turning callback functions into promises so that they're a little bit easier to work with.
- [Sequential execution](AsynchromousPatterns/sequential-execution/index.js) -
  - Sequential execution was introduced with callbacks and we saw how nesting too many callbacks can create an anti-pattern called callback hell or the pyramid of doom.
  - There is another way to handle things sequentially. And this time using Promises, we can see that our code is much cleaner, much easier to organize.
  - Everything's happening in order. So we can see that we're starting, waiting, things are happening sequentially, just like they were in the pyramid of doom, although it is much easier to manage this.
