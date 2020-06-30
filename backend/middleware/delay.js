const config = require("config");

module.exports = async (req, res, next) => {
	setTimeout(() => next(), config.get("delay"));
};
