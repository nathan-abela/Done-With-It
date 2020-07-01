import Constants from "expo-constants";

const settings = {
	// IPv4 Address (ipconfig):port
	dev: {
		apiUrl: "http://***.***.*.**:9000/api",
	},
	staging: {
		apiUrl: "http://***.***.*.**:9000/api",
	},
	prod: {
		apiUrl: "http://***.***.*.**:9000/api",
	},
};

const getCurrentSettings = () => {
	if (__DEV__) return settings.dev;
	if (Constants.manifest.releaseChannel === "staging")
		return settings.staging;
	return settings.prod;
};

export default getCurrentSettings();
