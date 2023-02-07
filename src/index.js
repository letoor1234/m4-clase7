require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { testDb } = require("./database");

const app = express();

// Conectando DB
testDb();
// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

// SETTINGS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// ROUTES
const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

const authorsRouter = require("./routes/authors");
app.use("/authors", authorsRouter);

const genresRouter = require("./routes/genres");
app.use("/genres", genresRouter);

// Ponemos en marcha
app.listen(process.env.PORT, () =>
  console.log("Servidor escuchando en puerto: ", process.env.PORT)
);
