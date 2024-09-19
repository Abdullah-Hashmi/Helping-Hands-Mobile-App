import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const MyConfirmEmailScreen = () => {
  const [code, setcode] = useState("");

  const onConfirmPressed = () => {
    console.warn("Confirm");
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
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Enter Your Confirmation Code..."
          value={code}
          setValue={setcode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend Code"
          onPress={onResendPressed}
          type="SECONDARY"
        />

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

export default MyConfirmEmailScreen;
