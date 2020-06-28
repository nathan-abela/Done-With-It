import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });

export default {
	login,
};
