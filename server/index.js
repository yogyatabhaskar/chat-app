const express = require("express");
const cors = require("cors");
const app = express();
const httpServer = require("http").createServer(app);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*", //to allow every connection
  },
});

require("dotenv").config();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("User connected with id: ", socket.id);

  socket.on("sendMessage", (data) => {
    console.log(data);
    socket.broadcast.emit("receiveMessage", data);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}.`);
});
