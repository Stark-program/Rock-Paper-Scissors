import { io } from "socket.io-client";

var socket = io("http://localhost:3001/");

const playerOne = socket.id;
console.log(playerOne);

function connectedUser() {
  socket.on("user", (id) => {
    if ("Player One" in localStorage) {
      localStorage.setItem("PlayerTwoId", id);
    } else localStorage.setItem("PlayerOneId", id);
    console.log(id + " is playing");
  });
}

function isItRock() {
  socket.emit("rock");
  socket.on("choseRock", (test) => {
    console.log(localStorage.getItem("Player One") + test);
  });
  socket.on("test", (test) => {
    console.log(test);
  });
}

function isItPaper() {
  socket.emit("paper");
  socket.on("chosePaper", (test) => {
    console.log(localStorage.getItem("Player One") + test);
  });
  socket.on("test", (test) => {
    console.log(test);
  });
}

function isItScissors() {
  socket.emit("scissors");

  socket.on("choseScissors", (test) => {
    console.log(localStorage.getItem("Player One") + test);
  });
  socket.on("test", (test) => {
    console.log(test);
  });
}
socket.on("test", (test) => {
  console.log(test);
});

function joinRoom() {
  socket.emit("joinroom", "Game");
}
socket.on("clearStorage", function () {
  console.log("event hear");
  localStorage.clear();
});

export { connectedUser, isItRock, isItPaper, isItScissors, joinRoom };
