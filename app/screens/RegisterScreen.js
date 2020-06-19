import React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCorrect={false}
                    icon="account"
                    name="name"
                    placeholder="Name"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                    keyboardType="email-address"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default RegisterScreen;
