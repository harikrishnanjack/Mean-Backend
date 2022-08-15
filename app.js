const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(
    "mongodb+srv://haris:RkWk2WpmK0n2M2x6@cluster0.drkpw1d.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const port = process.env.PORT || 5000;

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

app.listen(port, () => {
  console.log("Server listen @", port);
});
