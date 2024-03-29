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
- [Sequential execution with async/await](AsynchromousPatterns/sequential-execution-with-async-await) -
  - Promises give us a nice way to organize what happens by chaining together `.then` handlers. We use this technique to compose promise chains that can execute sequentially.
  - What if you don't want to compose functions in a chain?
  - What happens when you just want to write code?
  - All we really need to do is wait for the result of one promise to complete before running some more code.
  - Do we always have to encapsulate code bits in tiny functions?
  - The answer is `no`. JavaScript provides us a way to work with promises using code that appears synchronous, but is in fact asynchronous.
  - The solution is async functions. Inside of an async function, you can await for a promise to complete.
  - This example shows how we can modify the last sequentially executed promise chain using async and await.
  - Asynchronous functions give us a really nice way to organize our code in a more manageable fashion.
- [Parallel execution](AsynchromousPatterns/parallel-execution/index.js) -
  - Promises also come with some functions that allow us to resolve them at the same time.
  - We can make a bunch of asynchronous requests at once and obtain a series of asynchronous results faster, because these requests will not have to execute in order, or wait for the previous request to be completed.
  - When we're resolving several promises at the same time, it's referred to as parallel execution.
  - We can create a single promise that will resolve several promises at once using `promise.all`. So `promise.all` will take in an array of promises to resolve.
  - We can also execute promises in parallel by using `promise.race`. So `promise.race` still creates a single promise, but instead of waiting for all of the promises to be resolved before the single promise is resolved, we're only going to wait for the first promise to be resolved
  - So `promise.all` and `promise.race` give us a way to execute promises in parallel.
- [Concurrent tasks](AsynchromousPatterns/concurrent-tasks/index.js) -
  - So far we've looked at a couple of ways to execute asynchronous tasks sequentially. We also looked at a way that we can execute asynchronous task as promises in parallel. But what happens if we want to combine both sequential and parallel operations?
  - Sometimes promises may contain large tasks that eat a lot of resources or take a lot of time to process. Running everything at once can be too costly, but running one task at a time may take too long.
  - A possible solution for this is to create a task queue that can run a specified number of tasks concurrently at the same time.
- [Logging concurrent tasks](AsynchromousPatterns/logging-concurrent-tasks/index.js)

## Advanced Streams

- [Streams](AdvancedStreams/stream)
- [Readable streams](AdvancedStreams/readable-streams/index.js) -
  - A readable stream reads data from a source and then feeds it into a pipeline bit by bit.
  - We can create a readable stream that can read from a source array.
  - Streams have two modes, binary mode and object mode, and when they're in binary mode, we can actually read data as binary or we can read it as a string.
  - Readable streams can read data from any type of source and then feed it to anyone who is listening, chunk by chunk.
- [Using readable streams](AdvancedStreams/using-readable-streams/index.js) - Node JS comes with all types of readable streams
  - Http requests on the server and a response on the client, they're readable streams.
  - The file system has readable streams. Zipping and unzipping uses readable streams.
  - TCP sockets, process stdin, not to mention the many MPMs that implement readable streams.
- [Writable streams](AdvancedStreams/writable-streams/index.js) -
  - Writeable streams represent a destination for incoming data.
  - Writeable streams can be used to capture the data from a readable source and do something with it.
  - Just like readable streams, writeable streams are everywhere. HTTP client request and server responses are writeable streams.
  - The file system has writeable streams. Process.stdout and stderr, they're writeable streams.
  - Just like readable streams, writeable streams are published in countless NPMs.
- [Backpressure](AdvancedStreams/backpressure/index.js) -
  - Sometimes the data coming from a readable stream is too fast for a writable stream to handle.
- [Piping streams](AdvancedStreams/piping-streams) -
  - There's an awful lot of code that you have to use to implement a stream, and you have to worry about back pressure that seems a little complicated.
  - Piping streams is solution for that.
  - Instead of wiring up a bunch of listeners to listen for chunks of data and then pass those chunks of data into the write stream, the pipe method is doing it for us.
  - The pipe method also automatically handles back pressure for us.
  - We can pipe data from any readable stream to any writable stream.
- [Duplex streams]()-
  - A duplex stream is a stream that implements both a readable and a writable.
  - These streams allow data to pass through
  - Readable streams will pipe data into a duplex stream, and the duplex stream can also write that data.
  - So duplex stream represent the middle sections of pipelines.
  - Duplex stream can receive data from our read stream and then send that data to our write stream.
  - A typical duplex stream doesn't change anything about the data.
  - Duplex streams are a necessary component when you want to compose streams into complex pipelines.
  - The duplex stream implements both a readable and a writable side, and therefore they represent the center parts of a pipeline.
- [Transform streams](AdvancedStreams/transform-streams/index.js) -
  - Transform streams are a special type of duplex stream. Instead of simply passing the data to the read in to the write in, transform streams change the data.
  - Transform streams are the center pipe pieces that can be used to transform data from readable streams before they are sent to writable streams.
  - There are a lot of transform streams out there, Node.js comes with a zlib package, that's a transform stream that can be used to zip incoming data from the read stream, and send compressed data to the write stream.
  - Crypto is an NPM package that has transform streams that can encrypt data chunk by chunk, and then pass encrypted data to the write stream, or decrypt data from a read stream, and pass the decrypted data to the write stream

## Advanced Streams

We've taken a closer look at how node JS handles asynchronous processes with callbacks, promises, and streams.
Now it's time to put our knowledge to work by implementing a web server that handles upload and download streams. And node JS streams are everywhere. And the idea is that you wanna stream everything. So let's go ahead and get started building an HTTP server that can stream a video to the web browser.

- [Streaming to the browser](HTTPStreaming/streaming-to-the-browser/index.js)
- [Handling range requests](HTTPStreaming/handling-range-requests/index.js) -
  - And can I skip ahead? Yes, I can skip to different points of the video. So we are handling range requests.
  - Does this work in Safari now? Yes, it does.
  - Safari requires that we handle these range requests and because we are, our video now works.
  - Video handles range requests and we also introduced some stream options that we can add to file streams, specifically setting up a smaller piece of the stream using start and end values.
- [Forking and uploading streams](HTTPStreaming/forking-and-uploading-streams/index.js) -
  - The HTTP response object is a writable stream and the HTTP request object is a readable stream. We can use the request stream as a source.
- [Parsing multipart/form-data](HTTPStreaming/parsing-multipart-form-data/index.js) -
  - By using multiparty, to help us parse our multipart requests, we can actually take the part, which represents the file itself, and because that's a readable stream, pipe it to any readable stream that we choose to use. So, that actually concludes our little server project here. So we are successfully able to stream videos to the client on this video server. And handle range requests, as well as handle upload files. So, we're able to actually stream data from the client.
