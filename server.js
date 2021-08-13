var express = require("express");
var path = require("path");
var logger = require("morgan");
var favicon = require("serve-favicon");

require("dotenv").config();

require("./config/database");

var postsRouter = require("./routes/api/posts");
var usersRouter = require("./routes/api/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());

// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}

// api routes must be before the "catch all" route
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

// "catch all" route
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app listening on port ${port}`);
});
