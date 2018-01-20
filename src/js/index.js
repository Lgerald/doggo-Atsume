import io from "socket.io-client";
import '../stylesheets/index.scss'
import 'p2'
import 'pixi.js'
import 'phaser'
import './game'


const socket = io(window.location.origin);

socket.on("connect", () =>
  console.log("I have made a persistent two-way connection to the server!")
);
