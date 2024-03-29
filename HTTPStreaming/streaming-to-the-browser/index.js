const { createServer } = require("http");
const { stat, createReadStream } = require("fs");
const { promisify } = require("util");
const fileName = "../../AdvancedStreams/stream/powder-day.mp4";
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);
  res.writeHead(200, {
    "Content-Length": size,
    "Content-Type": "video/mp4",
  });
  createReadStream(fileName).pipe(res);
}).listen(3001, () => console.log("server is running - 3001"));
