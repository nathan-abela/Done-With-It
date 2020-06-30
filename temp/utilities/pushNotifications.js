const { Expo } = require("expo-server-sdk");

const sendPushNotification = async (targetExpoPushToken, message) => {
	const expo = new Expo();
	const chunks = expo.chunkPushNotifications([
		{ to: targetExpoPushToken, sound: "default", body: message },
	]);

	const sendChunks = async () => {
		// This code runs synchronously. We're waiting for each chunk to be send.
		// A better approach is to use Promise.all() and send multiple chunks in parallel.
		chunks.forEach(async (chunk) => {
			console.log("Sending Chunk", chunk);
			try {
				const tickets = await expo.sendPushNotificationsAsync(chunk);
				console.log("Tickets", tickets);
			} catch (error) {
				console.log("Error sending chunk", error);
			}
		});
	};
	await sendChunks();
};

module.exports = sendPushNotification;
