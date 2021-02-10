const router = require("express").Router();
const bookController = require("../../controllers/booksController")

router.route("/")
.get(bookController.findAll)
.post(bookController.create)
.get(bookController.findByFav);

router.route("/:id")
.put(bookController.update)
.delete(bookController.remove);

module.exports = router




