const express = require("express");
const router = express.Router();
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const usersStore = require("../store/users");
const validateWith = require("../middleware/validation");

const schema = {
	email: Joi.string().email().required(),
	password: Joi.string().required().min(5),
};

router.post("/", validateWith(schema), (req, res) => {
	const { email, password } = req.body;
	const user = usersStore.getUserByEmail(email);
	if (!user || user.password !== password)
		return res.status(400).send({ error: "Invalid email or password." });

	const token = jwt.sign(
		{ userId: user.id, name: user.name, email },
		"jwtPrivateKey"
	);
	res.send(token);
});

module.exports = router;
