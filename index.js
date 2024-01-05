const express = require("express");

const app = express();

app.use(express.json());

// body{
// title: String,
//description: string
// }

app.get("/todos", (req, res) => {
  res.send("From the server");
});

app.post("/tod", (req, res) => {});

app.put("/completed", (req, res) => {});

app.listen(3000, () => {
  console.log("app is listening at posr 3000");
});
