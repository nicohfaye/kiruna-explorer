require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

app.get("/api/home", (req, res) => {
  res.json("Hello World!");
});

app.listen(PORT || 3001, () => {
  console.log(`Server is running on ${PORT || 3001}`);
});
