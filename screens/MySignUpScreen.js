import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const MySignUpScreen = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setpasswordRepeat] = useState("");

  const onRegisterPressed = () => {
    console.warn("Registered");
  };

  const onSignInPressed = () => {
    console.warn("SignInPressed");
  };
  const onTermOfUsePressed = () => {
    console.warn("onTermOfUse Pressed");
  };
  const onPrivacyPressed = () => {
    console.warn("onPrivacy Pressed");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={Username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="PasswordRepeat"
          value={passwordRepeat}
          setValue={setpasswordRepeat}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <Text style={styles.text}>
          By registering, you confirm that you accept{" "}
          <Text style={styles.link} onPress={onTermOfUsePressed}>
            our terms of use
          </Text>{" "}
          and{" "}
          <Text style={styles.link} onPress={onPrivacyPressed}>
            privacy policy
          </Text>
        </Text>
        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
    marginTop: 20,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#4765A9",
  },
});

export default MySignUpScreen;
