const { Router } = require("express");
const {
  getAllBooks,
  getBook,
  createBook,
  editBook,
  deleteBook,
  createBookForm,
} = require("../controllers/books");

// Un paquete de rutas
const router = Router();

// Definimos las rutas que existen en nuestro paquete (enrutador)
router.get("/", getAllBooks);

router.get("/get/:id", getBook);

router.get("/create", createBookForm);

router.post("/", createBook);

router.put("/:id", editBook);

router.delete("/:id", deleteBook);

module.exports = router;
