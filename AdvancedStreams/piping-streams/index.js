const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("../stream/powder-day.mp4");
const writeStream = createWriteStream("./copy.mp4");

readStream.pipe(writeStream).on("error", console.error);
