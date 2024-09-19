import React from "react";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";
import { View, TextInput, StyleSheet } from "react-native";
import { color } from "@rneui/base";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    borderColor: Color.neutralGray200,
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    paddingHorizontal: Padding.p_xs, // Adjusted padding
    paddingVertical: Padding.p_xs,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    color: Color.textColorContentSecondary,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    marginLeft: 0, // Remove unnecessary marginLeft
    fontFamily: FontFamily.subheadLgSHLgMedium,
  },
});

export default CustomInput;

// const SignIn = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={[styles.signIn, styles.parentFlexBox]}>
//       <View style={styles.parentFlexBox}>
//         <View style={styles.statusBar}>
//           <StatusBar style={styles.orPosition} barStyle="default" />
//           <Button
//             style={[styles.leftTitleRight, styles.leftTitleRightFlexBox]}
//             mode="contained-tonal"
//             labelStyle={styles.leftTitleRightBtn}
//             onPress={() => navigation.goBack()}
//             contentStyle={styles.leftTitleRightBtn1}
//           >
//             Back
//           </Button>
//         </View>
//         <View style={[styles.text, styles.parentFlexBox]}>
//           <Text style={[styles.signInWith, styles.nameTypo]}>
//             Sign in with your email
//           </Text>
//         </View>
//       </View>
//       <View style={[styles.inputParent, styles.parentFlexBox]}>
//         <View style={styles.inputLayout}>
//           <View style={styles.inputChild} />
//           <Text style={[styles.name, styles.nameLayout]}>{`Email `}</Text>
//         </View>
//         <View style={[styles.input1, styles.inputLayout]}>
//           <View style={styles.inputChild} />
//           <Text style={[styles.name, styles.nameLayout]}>
//             Enter Your Password
//           </Text>
//           <Image
//             style={[styles.eyeOffIcon, styles.namePosition]}
//             contentFit="cover"
//             source={require("../assets/eye-off1.png")}
//           />
//         </View>
//       </View>
//       <View
//         style={[styles.forgetPasswordWrapper, styles.leftTitleRightFlexBox]}
//       >
//         <Text style={[styles.forgetPassword, styles.forgetPasswordTypo]}>
//           Forget password?
//         </Text>
//       </View>
//       <View style={styles.frameParent}>
//         <View style={styles.parentFlexBox}>
//           <TouchableHighlight
//             style={styles.ctaprimary}
//             underlayColor="#fff"
//             activeOpacity={0.2}
//             onPress={() =>
//               navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
//             }
//           >
//             <Text style={[styles.createAnAccount, styles.forgetPasswordTypo]}>
//               Sign in
//             </Text>
//           </TouchableHighlight>

//           <View style={styles.orParent}>
//             <Text style={[styles.or, styles.orTypo]}>or</Text>
//             <View style={[styles.groupChild, styles.groupLayout]} />
//             <View style={[styles.groupItem, styles.groupLayout]} />
//           </View>
//           <Pressable
//             style={styles.socialSignUp}
//             onPress={() => Linking.openURL("www.gmail.com")}
//           >
//             <Image
//               style={styles.gmailIcon}
//               contentFit="cover"
//               source={require("../assets/gmail1.png")}
//             />
//             <Text style={[styles.signUpWith, styles.orTypo]}>
//               Sign up with Gmail
//             </Text>
//           </Pressable>
//         </View>
//         <Pressable onPress={() => navigation.navigate("Sign Up")}>
//           <Text style={styles.orTypo}>
//             <Text style={styles.dontHaveAn}>{`Don’t have an account? `}</Text>
//             <Text style={styles.signUp}>Sign Up</Text>
//           </Text>
//         </Pressable>
//       </View>
//       <View style={styles.homeIndicator}>
//         <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
//       </View>
//     </View>
//   );
// };

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
//     fontWeight: "500",
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

// export default SignIn;
