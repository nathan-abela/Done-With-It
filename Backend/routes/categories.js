const express = require("express");
const router = express.Router();
const categoriesStore = require("../store/categories");

router.get("/", (req, res) => {
	const categories = categoriesStore.getCategories();
	res.send(categories);
});

module.exports = router;
