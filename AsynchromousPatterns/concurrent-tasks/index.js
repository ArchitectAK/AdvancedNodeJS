var delay = (seconds) =>
  new Promise((resolves) => {
    setTimeout(resolves, seconds * 1000);
  });

var tasks = [
  delay(4),
  delay(6),
  delay(4),
  delay(3),
  delay(5),
  delay(7),
  delay(9),
  delay(10),
  delay(3),
  delay(5),
];

class PromiseQueue {
  constructor(promises = [], concurrentCount = 1) {
    this.concurrent = concurrentCount;
    this.total = promises.length;
    this.todo = promises;
    this.running = [];
    this.complete = [];
  }
  get runAnother() {
    return this.running.length < this.concurrent && this.todo.length;
  }
  run() {
    while (this.runAnother) {
      var promise = this.todo.shift();
      promise.then(() => {
        this.complete.push(this.running.shift());
        this.run();
      });
      this.running.push(promise);
    }
  }
}

var delayQueue = new PromiseQueue(tasks, 2);
delayQueue.run();
