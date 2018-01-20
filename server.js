const path = require("path");
const express = require("express");
const app = express();
const socketio = require("socket.io");
const PORT = 3000

const server = app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})

const io = socketio(server, {
  serveClient: false,
  wsEngine: "ws" // uws is not supported since it is a native module
});

io.on("connection", onConnect);



function onConnect(socket) {
  console.log("connect " + socket.id)
  socket.on("disconnect", () => console.log("disconnected " + socket.id));
}

app.use(express.static(path.join(__dirname, 'public')))