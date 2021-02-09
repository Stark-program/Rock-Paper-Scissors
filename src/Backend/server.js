// const app = require("express")();

const { Server } = require("socket.io");

// const httpServer = require("http").createServer(app);
const io = require("socket.io")();

io.on("connection", (client) => {
  client.on("subscribeToTimer", (interval) => {
    console.log("client is subscribing to timer with interval ", interval);
    setInterval(() => {
      client.emit("timer", new Date());
    }, interval);
  });
  client.on("disconnect", (reason) => {
    console.log("client has discconected because of ", reason);
  });
});

const port = 3001;
io.listen(port);

console.log("listening on port ", port);
