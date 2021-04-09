const app = require("express")();
const http = require("http").createServer(app);

const io = require("socket.io")(http);
var path = require("path");
const { disconnect } = require("process");

// app.get("/gay", (req, res) => {
//   res.sendFile(path.join(__dirname, "../App.js"));
// });

var players = [
  {
    player_One_Name: "Player One Name",
    player_One_ID: 0,
    player_One_Choice: "",
  },
  {
    player_Two_Name: "Player Two Name",
    player_Two_ID: 0,
    player_Two_Choice: "",
  },
];

io.on("connection", (socket) => {
  console.log("A Player Connected");
  if (players[0].player_One_ID == 0) {
    players[0].player_One_ID = socket.id;
  } else players[1].player_Two_ID = socket.id;

  socket.on(
    "name",
    (name) => {
      for (var i in players) {
        if (players[i].player_One_Name == "Player One Name") {
          players[i].player_One_Name = name;
          break;
        } else if (players[i].player_Two_Name == "Player Two Name") {
          players[i].player_Two_Name = name;
        }
      }
      if (players[0].player_One_Name !== "Player One Name") {
        socket.emit("player one", players[0].player_One_Name);
      }
      if (players[1].player_Two_Name !== "Player Two Name") {
        socket.emit("player two", players[1].player_Two_Name);
      }
    },

    console.log(players)
  );

  socket.on("disconnect", function () {
    socket.removeAllListeners();
  });
});

const port = 3001;
http.listen(port, () => {
  console.log("listening on port " + port);
});
