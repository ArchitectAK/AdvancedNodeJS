const { createServer } = require("http");
const { createReadStream } = require("fs");
const fileName = "../../AdvancedStreams/stream/powder-day.mp4";

createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "video/mp4",
  });
  createReadStream(fileName).pipe(res);
}).listen(3001, () => console.log("server is running - 3001"));
