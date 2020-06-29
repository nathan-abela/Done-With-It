import client from "./client";

const send = (message, listingId) =>
	client.post("/messages", {
		message,
		listingId,
	});

export default {
	send,
};
