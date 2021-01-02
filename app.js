/** @format */

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
<<<<<<< HEAD
  console.log(`Server running on port http://localhost:${PORT}`);
=======
  console.log(`Server is running on port ${PORT}`);
>>>>>>> b00d65cb1e2f9cfa134589eb4882431b3f7c8ccc
});
