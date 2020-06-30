const express = require("express");
const router = express.Router();

const store = require("../store/listings");
const auth = require("../middleware/auth");
const listingMapper = require("../mappers/listings");

router.get("/:id", auth, (req, res) => {
	const listing = store.getListing(parseInt(req.params.id));
	if (!listing) return res.status(404).send();
	const resource = listingMapper(listing);
	res.send(resource);
});

module.exports = router;
