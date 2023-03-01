const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

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
