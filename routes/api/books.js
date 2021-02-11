const router = require("express").Router();
const bookController = require("../../controllers/booksController")

router.route("/")
.get(bookController.findAll)
.post(bookController.create);

router.route("/:id")
.get(bookController.findById)
.put(bookController.update);

router.route("/savedBooks/:id")
.delete(bookController.remove);

module.exports = router




