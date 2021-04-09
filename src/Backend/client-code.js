import { io } from "socket.io-client";

var socket = io("http://localhost:3001/", {
  transports: ["websocket"],
  upgrade: false,
});

function names() {
  socket.emit("");
}

export { socket };
