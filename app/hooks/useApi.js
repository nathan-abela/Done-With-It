import { useState } from "react";

export default useApi = (apiFunc) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async (...args) => {
		setLoading(true);
		const response = await apiFunc(...args);
		setLoading(false);

		setError(!response.ok);
		setData(response.data);
		return response;
	};

	return { data, error, loading, request };
};
