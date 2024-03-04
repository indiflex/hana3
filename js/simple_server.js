import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is 3000 Server!<h1><div id='root'></div>");
});

app.listen(3000, () => console.log("started server..."));
