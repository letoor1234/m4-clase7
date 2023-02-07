const Author = require("../models/Author");
const Book = require("../models/Book");
const Genre = require("../models/Genre");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: [
        {
          model: Author,
          as: "Author",
        },
        {
          model: Genre,
          as: "genres",
        },
      ],
    });

    return res.status(200).render("books/booksList.ejs", { books });
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const getBook = (req, res) => {
  const { id } = req.params;

  return res.send("book: ", id);
};

const createBookForm = async (req, res) => {
  try {
    const authors = await Author.findAll();
    const genres = await Genre.findAll();

    return res
      .status(200)
      .render("books/bookCreateForm.ejs", { authors, genres });
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const createBook = async (req, res) => {
  const book = req.body;

  if (!book) return res.status(400).send("Falta la información del libro");

  try {
    const newBook = await Book.create(book);

    await newBook.setGenres(book?.genres);

    return res.status(200).redirect("/books");
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const editBook = (req, res) => {
  const { id } = req.params;
  const { book } = req.body;

  return res.send("edit book: ", id);
};

const deleteBook = (req, res) => {
  const { id } = req.params;

  return res.send("delete book: ", id);
};

module.exports = {
  getAllBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
  createBookForm,
};
