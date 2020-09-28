const express = require("express");
const app = express();
const port = process.env.PORT || 1337;

app.get("/", (req, res) => res.send("Hello world 1"));
app.listen(port, () => console.log("Application started"));
