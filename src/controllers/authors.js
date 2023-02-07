const Author = require("../models/Author");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();

    return res.render("authors/authorsList.ejs", { authors });
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const getAuthor = async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(400).send("Falta el id del autor");

  try {
    const author = await Author.findOne({ id });

    return res.status(200).render("authors/authorEditForm.ejs", { author });
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const createAuthorForm = (req, res) => {
  return res.status(200).render("authors/authorCreateForm.ejs");
};

const createAuthor = async (req, res) => {
  const author = req.body;

  if (!author) return res.status(400).send("Falta la informacion de autor");

  try {
    await Author.create(author);

    return res.status(200).redirect("/authors");
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const editAuthor = async (req, res) => {
  const { id } = req.params;
  const { author } = req.body;

  try {
    await Author.update({ id, ...author });

    return res.status(200).redirect("/authors");
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const deleteAuthor = (req, res) => {
  const { id } = req.params;

  return res.status(200).send("eliminando autor: ", id);
};

module.exports = {
  getAllAuthors,
  getAuthor,
  createAuthorForm,
  createAuthor,
  editAuthor,
  deleteAuthor,
};
