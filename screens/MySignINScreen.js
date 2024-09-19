import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Logo from "../assets/Logo_1.png";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";

const MySignINScreen = ({ navigation }) => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("everything is ok");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot");
  };
  const onSignUpPressed = () => {
    console.warn("Create account");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} />
        <CustomInput
          placeholder="Username"
          value={Username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="SignIn"
          onPress={() => navigation.navigate("Sign in")}
        />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={() => navigation.navigate("Forgot password screen")}
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
  logo: {
    marginTop: 20, // Move the logo down by 20 units
    marginLeft: 20, // Move the logo to the right by 20 units
    width: "70%",
    maxWidth: 300,
    height: 100,
    maxHeight: 200,
    resizeMode: "contain", // Adjust this based on your image aspect ratio
  },
});

export default MySignINScreen;
