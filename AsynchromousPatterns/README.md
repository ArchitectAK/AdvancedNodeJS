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