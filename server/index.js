const express = require("express");
const cors = require("cors");
const app = express();
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);

require("dotenv").config();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

//for recieving the messages
io.on("connection", (socket) => {
  console.log("User connected", socket.id);
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
