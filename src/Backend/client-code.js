import { io } from "socket.io-client";

var socket = io("http://localhost:3001/");

const playerOne = socket.id;
console.log(playerOne);

function connectedUser() {
  socket.on("user", (playerOne) => {
    sessionStorage.setItem("playerOneId", playerOne);
    console.log(playerOne + " is player one");
  });
}

function isItRock() {
  socket.emit("rock");
  socket.on("choseRock", (test) => {
    console.log(sessionStorage.getItem("Player One") + test);
  });
  socket.on("test", (test) => {
    console.log(test);
  });
}

function isItPaper() {
  socket.emit("paper");
  socket.on("chosePaper", (test) => {
    console.log(sessionStorage.getItem("Player One") + test);
  });
  socket.on("test", (test) => {
    console.log(test);
  });
}

function isItScissors() {
  socket.emit("scissors");

  socket.on("choseScissors", (test) => {
    console.log(sessionStorage.getItem("Player One") + test);
  });
  socket.on("test", (test) => {
    console.log(test);
  });
}
socket.on("test", (test) => {
  console.log(test);
});

export { connectedUser, isItRock, isItPaper, isItScissors };
