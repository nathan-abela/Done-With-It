import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "../Text";

import colors from "../../config/colors";

function ListItem({
	title,
	subTitle,
	image,
	IconComponent,
	onPress,
	renderRightActions,
}) {
	return (
		<Swipeable renderRightActions={renderRightActions}>
			<TouchableHighlight underlayColor={colors.light} onPress={onPress}>
				<View style={styles.container}>
					{IconComponent}
					{image && <Image style={styles.image} source={image} />}

					<View style={styles.detailsContainer}>
						<Text style={styles.title} numberOfLines={1}>
							{title}
						</Text>
						{subTitle && (
							<Text style={styles.subTitle} numberOfLines={2}>
								{subTitle}
							</Text>
						)}
					</View>

					<MaterialCommunityIcons
						color={colors.medium}
						name="chevron-right"
						size={25}
					/>
				</View>
			</TouchableHighlight>
		</Swipeable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: "500",
	},
});

export default ListItem;
