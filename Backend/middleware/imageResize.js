const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const outputFolder = "public/assets";

module.exports = async (req, res, next) => {
	const images = [];

	const resizePromises = req.files.map(async (file) => {
		await sharp(file.path)
			.resize(2000)
			.jpeg({ quality: 50 })
			.toFile(path.resolve(outputFolder, file.filename + "_full.jpg"));

		await sharp(file.path)
			.resize(100)
			.jpeg({ quality: 30 })
			.toFile(path.resolve(outputFolder, file.filename + "_thumb.jpg"));

		fs.unlinkSync(file.path);

		images.push(file.filename);
	});

	await Promise.all([...resizePromises]);

	req.images = images;

	next();
};
