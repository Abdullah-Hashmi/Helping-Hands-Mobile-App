import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const MyForgotPasswordScreen = () => {
  const [username, setUsername] = useState("");

  const onSendPressed = () => {
    console.warn("Send Pressed");
  };

  const onSignInPressed = () => {
    console.warn("SignInPressed");
  };
  const onResendPressed = () => {
    console.warn("ResendPressed");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Your password</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Send" onPress={onSendPressed} />

        <CustomButton
          text="Back To Sign in"
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

export default MyForgotPasswordScreen;
