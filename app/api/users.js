import client from "./client";

const register = (userInfo) => client.post("/users", userInfo);

export default { register };
