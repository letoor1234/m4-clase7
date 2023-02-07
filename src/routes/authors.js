const { Router } = require("express");
const {
  getAllAuthors,
  getAuthor,
  createAuthor,
  editAuthor,
  deleteAuthor,
  createAuthorForm,
} = require("../controllers/authors");

const router = Router();

// listado
router.get("/", getAllAuthors);

// individual
router.get("/get/:id", getAuthor);

// obtener formulario de creacion
router.get("/create", createAuthorForm);

// creacion
router.post("/", createAuthor);

// edicion
router.post("/edit/:id", editAuthor);

// eliminacion
router.delete("/delete/:id", deleteAuthor);

module.exports = router;
