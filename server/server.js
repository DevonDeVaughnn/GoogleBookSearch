const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app

MONGODB_URI =
  "mongodb+srv://dbDevon:pasword!!!@googlebook.ailb4.mongodb.net/googlebook?retryWrites=true&w=majority";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on http://localhost:${PORT} !`);
});
