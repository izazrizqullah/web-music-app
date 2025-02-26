require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes");
const morgan = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(router);

app.get("/", (_req, res) => {
  return res.render("index");
});

// handle route statis
app.use("/public", express.static(path.join(__dirname, "public")));

// handler 404
app.use((_req, res) => {
  return res.status(404).json({
    status: false,
    message: "are you lost?",
    data: null,
  });
});

// handler 500
app.use((_req, res) => {
  return res.status(500).json({
    status: false,
    message: "internal server error",
    data: null,
  });
});

app.listen(PORT, () => {
  return console.log(`running on http://localhost:${PORT}`);
});
