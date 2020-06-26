import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible = false }) {
	if (!visible) return null;

	return (
		<LottieView
			autoPlay
			loop
			source={require("../assets/animations/loader.json")}
		/>
	);
}

export default ActivityIndicator;
