const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})



app.use(express.static(path.join(__dirname, 'public')))