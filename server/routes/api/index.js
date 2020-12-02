const router = require("express").Router();
const bookRoutes = require("./booksApi.js");

router.use("/books", bookRoutes);

module.exports = router;
