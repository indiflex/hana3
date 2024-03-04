import express from "express";

const app = express();

// routing
app.all("/", (req, res) => {
  res.send("<h1>Hello!</h1><div id='root'></div>");
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id, name: "Hong" });
});

app.listen(3000, () => console.log("server started..."));
