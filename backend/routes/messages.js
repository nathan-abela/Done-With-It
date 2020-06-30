const express = require("express");
const router = express.Router();
const Joi = require("joi");
const { Expo } = require("expo-server-sdk");

const usersStore = require("../store/users");
const listingsStore = require("../store/listings");
const messagesStore = require("../store/messages");
const sendPushNotification = require("../utilities/pushNotifications");
const auth = require("../middleware/auth");
const validateWith = require("../middleware/validation");

const schema = {
	listingId: Joi.number().required(),
	message: Joi.string().required(),
};

router.get("/", auth, (req, res) => {
	const messages = messagesStore.getMessagesForUser(req.user.userId);

	const mapUser = (userId) => {
		const user = usersStore.getUserById(userId);
		return { id: user.id, name: user.name };
	};

	const resources = messages.map((message) => ({
		id: message.id,
		listingId: message.listingId,
		dateTime: message.dateTime,
		content: message.content,
		fromUser: mapUser(message.fromUserId),
		toUser: mapUser(message.toUserId),
	}));

	res.send(resources);
});

router.post("/", [auth, validateWith(schema)], async (req, res) => {
	const { listingId, message } = req.body;

	const listing = listingsStore.getListing(listingId);
	if (!listing) return res.status(400).send({ error: "Invalid listingId." });

	const targetUser = usersStore.getUserById(parseInt(listing.userId));
	if (!targetUser) return res.status(400).send({ error: "Invalid userId." });

	messagesStore.add({
		fromUserId: req.user.userId,
		toUserId: listing.userId,
		listingId,
		content: message,
	});

	const { expoPushToken } = targetUser;

	if (Expo.isExpoPushToken(expoPushToken))
		await sendPushNotification(expoPushToken, message);

	res.status(201).send();
});

module.exports = router;
