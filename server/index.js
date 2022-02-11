const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
