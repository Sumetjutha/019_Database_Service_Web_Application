const express = require("express");
const req = require("express/lib/request");
// const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

// app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.send("");
});

app.listen(PORT, () => {
  console.log("This app is ready to use on port" + PORT);
});
