import React from "react";
import * as Yup from "yup";
import { StyleSheet, Image } from "react-native";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/logo-red.png")}
			/>

			<Form
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="email"
					name="email"
					placeholder="Email"
					textContentType="emailAddress"
					keyboardType="email-address"
				/>

				<FormField
					autoCapitalize="none"
					autoCorrect={false}
					icon="lock"
					name="password"
					placeholder="Password"
					textContentType="password"
					secureTextEntry={true}
				/>
				<SubmitButton title="Login" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
});

export default LoginScreen;
