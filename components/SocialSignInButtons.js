import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("Facebook");
  };
  const onSignInGoogle = () => {
    console.warn("Google");
  };
  const onSignInApple = () => {
    console.warn("Apple");
  };
  return (
    <>
      {/* <Pressable
        style={styles.socialSignUp}
        onPress={() => Linking.openURL("www.gmail.com")}
      >
        <Image
          style={styles.gmailIcon}
          contentFit="cover"
          source={require("../assets/gmail1.png")}
        />
        <Text style={[styles.signUpWith, styles.orTypo]}>
          Sign up with Gmail
        </Text>
      </Pressable> */}
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};
// const styles = StyleSheet.create({
//   leftTitleRightBtn: {
//     color: "#414141",
//     fontSize: 16,
//     fontFamily: "Poppins-Regular",
//   },
//   leftTitleRightBtn1: {
//     marginLeft: -196.5,
//     height: 42,
//     width: 393,
//   },
//   parentFlexBox: {
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   orPosition: {
//     top: 0,
//     position: "absolute",
//   },
//   leftTitleRightFlexBox: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   nameTypo: {
//     textAlign: "left",
//     fontFamily: FontFamily.subheadLgSHLgMedium,
//     fontWeight: "500",
//   },
//   nameLayout: {
//     lineHeight: 23,
//     fontSize: FontSize.subheadLgSHLgMedium_size,
//   },
//   inputLayout: {
//     height: 60,
//     width: 362,
//   },
//   namePosition: {
//     top: "31.67%",
//     position: "absolute",
//   },
//   forgetPasswordTypo: {
//     textAlign: "center",
//     fontFamily: FontFamily.subheadLgSHLgMedium,
//     fontWeight: "500",
//   },
//   orTypo: {
//     lineHeight: 24,
//     textAlign: "center",
//     fontSize: FontSize.subheadLgSHLgMedium_size,
//     fontFamily: FontFamily.subheadLgSHLgMedium,
//     fontWeight: "50",
//   },
//   groupLayout: {
//     height: 1,
//     width: 157,
//     borderTopWidth: 1,
//     backgroundColor: Color.baseColorInfoColor,
//     top: 12,
//     borderColor: Color.baseColorInfoColor,
//     borderStyle: "solid",
//     position: "absolute",
//   },
//   leftTitleRightPosition: {
//     left: "50%",
//     position: "absolute",
//   },
//   leftTitleRight: {
//     top: 52,
//     left: "50%",
//     position: "absolute",
//   },
//   statusBar: {
//     height: 94,
//     width: 393,
//   },
//   signInWith: {
//     fontSize: FontSize.titleMdTMdSemibold_size,
//     lineHeight: 30,
//     color: Color.textColorContentSecondary,
//     width: 364,
//   },
//   text: {
//     marginTop: 30,
//   },
//   inputChild: {
//     height: "100%",
//     top: "0%",
//     right: "0%",
//     bottom: "0%",
//     left: "0%",
//     borderWidth: 1,
//     borderColor: Color.baseColorInfoColor,
//     borderStyle: "solid",
//     borderRadius: Border.br_5xs,
//     position: "absolute",
//     width: "100%",
//   },
//   name: {
//     left: "5.52%",
//     color: Color.neutralGray200,
//     top: "31.67%",
//     position: "absolute",
//     textAlign: "left",
//     fontFamily: FontFamily.subheadLgSHLgMedium,
//     fontWeight: "500",
//   },
//   eyeOffIcon: {
//     height: "40%",
//     width: "6.63%",
//     right: "3.31%",
//     bottom: "28.33%",
//     left: "90.06%",
//     maxWidth: "100%",
//     maxHeight: "100%",
//     opacity: 0.9,
//     overflow: "hidden",
//   },
//   input1: {
//     marginTop: 20,
//   },
//   inputParent: {
//     marginTop: 57,
//   },
//   forgetPassword: {
//     fontSize: FontSize.subheadSmSHSmMedium_size,
//     lineHeight: 19,
//     color: Color.baseColorErrorColor,
//   },
//   forgetPasswordWrapper: {
//     padding: Padding.p_3xs,
//     marginTop: 57,
//   },
//   createAnAccount: {
//     color: Color.shadesWhite,
//     lineHeight: 23,
//     fontSize: FontSize.subheadLgSHLgMedium_size,
//   },
//   ctaprimary: {
//     backgroundColor: Color.primary700,
//     width: 340,
//     height: 54,
//     paddingHorizontal: Padding.p_74xl_5,
//     paddingVertical: Padding.p_base_5,
//     borderRadius: Border.br_5xs,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   or: {
//     left: 163,
//     color: Color.baseColorInfoColor,
//     top: 0,
//     position: "absolute",
//   },
//   groupChild: {
//     left: 0,
//   },
//   groupItem: {
//     left: 187,
//   },
//   orParent: {
//     width: 343,
//     height: 24,
//     marginTop: 20,
//   },
//   gmailIcon: {
//     width: 24,
//     height: 24,
//     overflow: "hidden",
//     marginLeft: 0,
//   },
//   signUpWith: {
//     marginLeft: 8,
//     color: Color.textAndIconContentTertiary,
//   },
//   socialSignUp: {
//     borderColor: Color.neutralGray200,
//     borderWidth: 1.5,
//     paddingHorizontal: Padding.p_69xl_5,
//     paddingVertical: Padding.p_xs,
//     marginTop: 20,
//     borderStyle: "solid",
//     borderRadius: Border.br_5xs,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   dontHaveAn: {
//     color: Color.textAndIconContentTertiary,
//   },
//   signUp: {
//     color: Color.primary700,
//   },
//   frameParent: {
//     height: 259,
//     justifyContent: "space-between",
//     marginTop: 57,
//     alignItems: "center",
//   },
//   homeIndicator1: {
//     marginLeft: -66.5,
//     bottom: 8,
//     borderRadius: Border.br_81xl,
//     backgroundColor: Color.lightThemeTextHeading,
//     width: 134,
//     height: 5,
//   },
//   homeIndicator: {
//     height: 34,
//     marginTop: 57,
//     width: 393,
//   },
//   signIn: {
//     backgroundColor: Color.shadesWhite,
//     flex: 1,
//     height: 852,
//     overflow: "hidden",
//     width: "100%",
//     justifyContent: "center",
//   },
// });

export default SocialSignInButtons;
