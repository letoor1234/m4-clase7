const Genre = require("../models/Genre");

const getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.findAll();

    return res.render("genres/genresList.ejs", { genres });
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const getGenre = (req, res) => {
  const { id } = req.params;

  return res.send(`genero: ${id}`);
};

const createGenreForm = (req, res) => {
  return res.status(200).render("genres/genreCreateForm.ejs");
};

const createGenre = async (req, res) => {
  const genre = req.body;

  if (!genre) return res.status(400).send("Falta la información del género");

  try {
    await Genre.create(genre);

    return res.status(201).redirect("/genres");
  } catch (err) {
    console.log("ERR");
    console.log(err);
    return res.status(500).send("Error interno del servidor");
  }
};

const editGenre = (req, res) => {
  const { id } = req.params;
  const { genre } = req.body;

  return res.send("editando genero: ", id);
};

const deleteGenre = (req, res) => {
  const { id } = req.params;

  return res.send("eliminando genero: ", id);
};

module.exports = {
  getAllGenres,
  getGenre,
  createGenre,
  editGenre,
  deleteGenre,
  createGenreForm,
};
