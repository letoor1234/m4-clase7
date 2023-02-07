const { Router } = require("express");
const {
  getAllGenres,
  getGenre,
  createGenre,
  editGenre,
  deleteGenre,
  createGenreForm
} = require("../controllers/genres");

const router = Router();

router.get("/", getAllGenres);

router.get("/get/:id", getGenre);

router.get("/create", createGenreForm);

router.post("/", createGenre);

router.put("/:id", editGenre);

router.delete("/:id", deleteGenre);

module.exports = router;
