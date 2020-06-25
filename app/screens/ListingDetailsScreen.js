import React from "react";
import { View, Image, StyleSheet } from "react-native";

import Text from "../components/Text";
import ListItem from "../components/lists/ListItem";

import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
	const listing = route.params;

	return (
		<View>
			<Image style={styles.image} source={listing.image} />

			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{listing.title}</Text>
				<Text style={styles.price}>€{listing.price}</Text>

				<View style={styles.userContainer}>
					<ListItem
						image={require("../assets/user.jpg")}
						title="Nathan Abela"
						subTitle="5 Listings"
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: "bold",
		fontSize: 20,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: "500",
	},
	userContainer: {
		marginVertical: 40,
	},
});

export default ListingDetailsScreen;
