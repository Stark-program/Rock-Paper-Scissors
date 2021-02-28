const app = require("express")();
const http = require("http").createServer(app);

const io = require("socket.io")(http);
var path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../App.js"));
});
io.on("connection", (socket) => {
  io.emit("test", "Testing Emit");
  socket.emit("user", socket.id);
  console.log(socket.id);
  socket.on("rock", () => {
    socket.emit("choseRock", " Chose Rock");
  });
  socket.on("paper", () => {
    socket.emit("chosePaper", " Chose Paper");
  });
  socket.on("scissors", () => {
    socket.emit("choseScissors", " Chose Scissors");
  });
});

const port = 3001;
http.listen(port, () => {
  console.log("listening on port " + port);
});
