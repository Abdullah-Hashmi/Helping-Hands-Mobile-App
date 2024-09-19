import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import SocialSignInButtons from "../components/SocialSignInButtons";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";
import GmailComponent from "../components/gmail";

const SignIn = ({ navigation }) => {
  const { height } = useWindowDimensions();

  const [signdata, setSigndata] = useState({
    email: "",
    password: "",
  });
  const onSignInPressed = () => {
    console.warn("everything is ok");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot");
  };
  const onSignUpPressed = () => {
    console.warn("Create account");
  };
  const onSignInFacebook = () => {
    console.warn("Facebook");
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.signIn, styles.parentFlexBox]}
    >
      <View style={styles.container}>
        <StatusBar barStyle="default" />

        <View style={styles.header}>
          <Text style={styles.title}>Sign in with your email</Text>
        </View>
        <CustomInput
          placeholder="Enter your Email"
          value={signdata.email}
          setValue={(e) => setSigndata({ ...signdata, email: e })}
        />
        <CustomInput
          placeholder="Enter your password"
          value={signdata.password}
          setValue={(e) => setSigndata({ ...signdata, password: e })}
        />
        <View
          style={[styles.forgetPasswordWrapper, styles.leftTitleRightFlexBox]}
        >
          <Pressable
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
              Forget password?
            </Text>
          </Pressable>
        </View>
        <TouchableHighlight
          style={[styles.ctaprimary, styles.titleFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Sign In
          </Text>
        </TouchableHighlight>
        <View style={styles.orParent}>
          <Text style={[styles.or, styles.orTypo]}>or</Text>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <View style={[styles.groupItem, styles.groupLayout]} />
        </View>
        <GmailComponent />
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.orTypo}>
            <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
            <Text style={styles.signUp}>Sign Up</Text>
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    textAlign: "center",
    gap: 2,
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "transparent",
  },
  backButtonText: {
    color: "#414141",
    fontSize: 16,
    fontFamily: FontFamily.subheadLgSHLgMedium,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    top: 20,
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    fontFamily: FontFamily.subheadLgSHLgMedium,
  },
  or: {
    color: Color.baseColorInfoColor,
    position: "absolute",
  },
  groupLayout: {
    height: 1,
    width: 157,
    borderTopWidth: 1,
    backgroundColor: Color.baseColorInfoColor,
    borderColor: Color.baseColorInfoColor,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 187,
  },
  orParent: {
    width: 343,
    height: 24,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  orTypo: {
    lineHeight: 24,
    fontSize: 16, // Adjust the font size as needed
    fontWeight: "500",
  },
  orTypo: {
    top: 15,
    lineHeight: 24,
    textAlign: "center",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  dontHaveAn: {
    color: Color.textAndIconContentTertiary,
  },
  signUp: {
    color: Color.primary700,
  },

  forgetPasswordTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  forgetPasswordWrapper: {
    padding: Padding.p_3xs,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  forgetPassword: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.baseColorErrorColor,
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    zIndex: 1,
    flexDirection: "row",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
