import io from "socket.io-client";
import '../stylesheets/index.scss'
import 'p2'
import 'pixi.js'
import 'phaser'
import game from './game'


const socket = io.connect()

socket.on("connection", () =>
  console.log("I have made a persistent two-way connection to the server!")
);

socket.on("game", (game) => {
    console.log("emitting game?")
    socket.broadcast.emit(game)
})
