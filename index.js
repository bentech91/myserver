const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {
    res.status(200).send({
      message: "Hello World",
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => console.log(`App listening on port: ${port}`));
