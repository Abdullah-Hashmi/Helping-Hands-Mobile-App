import React from "react";
import { Pressable, Image, Text, Linking, StyleSheet } from "react-native";
import { Color, Padding, Border } from "../GlobalStyles";

const GmailComponent = () => {
  return (
    <Pressable
      style={styles.socialSignUp}
      onPress={() => Linking.openURL("https://www.gmail.com")}
    >
      <Image
        style={styles.gmailIcon}
        source={require("../assets/gmail1.png")}
      />
      <Text style={styles.signUpWith}>Sign up with Gmail</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  socialSignUp: {
    borderColor: Color.neutralGray200,
    borderWidth: 1.5,
    paddingHorizontal: Padding.p_69xl_5,
    paddingVertical: Padding.p_xs,
    marginTop: 20,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  gmailIcon: {
    width: 24,
    height: 24,
    marginLeft: 0,
  },
  signUpWith: {
    marginLeft: 8,
    color: Color.textAndIconContentTertiary,
  },
});

export default GmailComponent;
