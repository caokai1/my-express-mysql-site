const express = require("express");
const app = express();

const cors = require("cors");
// @ts-ignore
app.use(cors());
// @ts-ignore
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
