const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {
    res.send("Hello World");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
