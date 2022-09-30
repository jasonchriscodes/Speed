const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const port = process.env.PORT || 8888;
import path from "path";

// routes
const articles = require("./routes/api/Repository");

// cors config - allow same origin
const corsOptions = {
  origin: true,
  credentials: true,
};

// init cors
app.use(cors(corsOptions));

// init body parser
app.use(express.json());

// use routes here
app.use("/api/articles", articles);

// Connect to Mongo Atlas
connectDB();

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  // serve front-end client from build folder
  app.use(express.static(path.join(__dirname + "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => res.send(`API running on port ${port}`));
}

app.listen(port, () => console.log(`Server running on port ${port}`));
