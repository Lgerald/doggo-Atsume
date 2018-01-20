const path = require("path");
const express = require("express");
const app = express();
const socketio = require("socket.io");
const PORT = 3000

const server = app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})

const io = socketio(server)

io.on('connection', socket => {
    console.log('a new client is connected!')
    console.log(socket.id)
    socket.on('disconnect', () => {
        console.log("byeeee")
    })
})


app.use(express.static(path.join(__dirname, 'public')))