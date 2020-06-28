import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/Text";
import Button from "../components/Button";
import Card from "../components/Card";
import Screen from "../components/Screen";

import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
	const getListingsApi = useApi(listingsApi.getListings);

	useEffect(() => {
		getListingsApi.request();
	}, []);

	return (
		<>
			<ActivityIndicator visible={getListingsApi.loading} />
			<Screen style={styles.screen}>
				{getListingsApi.error && (
					<>
						<AppText>Couldn't retrieve the listings.</AppText>
						<Button
							title="Retry"
							onPress={getListingsApi.request}
						/>
					</>
				)}
				<FlatList
					data={getListingsApi.data}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => (
						<Card
							title={item.title}
							subTitle={"€" + item.price}
							imageUrl={item.images[0].url}
							onPress={() =>
								navigation.navigate(
									routes.LISTING_DETAILS,
									item
								)
							}
							thumbnailUrl={item.images[0].thumbnailUrl}
						/>
					)}
				/>
			</Screen>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: colors.light,
	},
});

export default ListingsScreen;
