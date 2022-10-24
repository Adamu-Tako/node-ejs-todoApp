const express = require("express");
const mongoose = require("mongoose");

const app = express();

// connection to mongoosedb
mongoose.connect("mongodb://localhost/todo_express");
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => console.log("Connected to Database"));

// setup middle wares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// server Config
app.listen(5000, () => console.log("Server dey run 4 port: 3000"));
