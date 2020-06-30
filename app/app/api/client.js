import { create } from "apisauce";

import cache from "../utility/cache";
import authStorage from "../auth/storage";

const apiClient = create({
	// IPv4 Address (ipconfig) : port
	baseURL: "http://***.***.*.**:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
	const authToken = await authStorage.getToken();
	if (!authToken) return;
	request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
	const response = await get(url, params, axiosConfig);

	if (response.ok) {
		cache.store(url, response.data);
		return response;
	}

	const data = await cache.get(url);
	return data ? { ok: true, data } : response;
};

export default apiClient;
