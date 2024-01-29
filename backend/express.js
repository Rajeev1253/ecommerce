require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./routes/users");
const connection = require("./mongo");
const morgan = require("morgan");
// database connection

connection();
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/users", users);

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.clear();
  console.log(`listening on port ${port}...`);
});
// app.listen(port,()=>console.log(`listening on port ${port}...`))
