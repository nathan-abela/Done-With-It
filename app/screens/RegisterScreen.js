import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
	return (
		<Screen style={styles.container}>
			<Form
				initialValues={{ name: "", email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				<FormField
					autoCorrect={false}
					icon="account"
					name="name"
					placeholder="Name"
				/>
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
				<SubmitButton title="Register" />
			</Form>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});

export default RegisterScreen;
