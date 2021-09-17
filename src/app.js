const server = require("./server");

server.listen(3001, (err) => {
  if (err) throw err;

  if (process.argv[2] === "DEV") {
    console.log("Server started on 3001");
  }
});
