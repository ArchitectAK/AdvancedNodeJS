const { Duplex, PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("../stream/powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4");

class Throtle extends Duplex {
  constructor(ms) {
    super();
    this.delay = ms;
  }
  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }
  _read() {}

  _final() {
    this.push(null);
  }
}

const report = new PassThrough();
const throtle = new Throtle(10);
var total = 0;
report.on("data", (chunk) => {
  total += chunk.length;
  console.log("bytes:\t", total);
});

readStream.pipe(throtle).pipe(readStream).pipe(writeStream);
