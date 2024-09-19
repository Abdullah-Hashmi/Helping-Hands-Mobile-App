import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  Pressable,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { FontFamily, FontSize, Padding, Color, Border } from "../GlobalStyles";

const ForgotPasswordScreen = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.parentFlexBox}
    >
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.title}>Forgot your password?</Text>
        </View>
        <CustomInput
          placeholder="Enter Your Gmail"
          value={oldPassword}
          setValue={setOldPassword}
        />
        <TouchableHighlight
          style={[styles.ctaprimary, styles.titleFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PhoneVerifyOtp")}
        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Send OTP
          </Text>
        </TouchableHighlight>
        <Pressable onPress={() => navigation.navigate("")}>
          <Text style={styles.orTypo}>
            <Text style={styles.dontHaveAn}>{`Did’t recieve OTP? `}</Text>
            <Text style={styles.signUp}>Resend it</Text>
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    fontFamily: "Poppins-Regular",
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
});

export default ForgotPasswordScreen;
