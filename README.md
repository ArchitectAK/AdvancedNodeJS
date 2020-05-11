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
