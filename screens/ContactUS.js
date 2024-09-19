import * as React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const ContactUS = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.contactUs, styles.titleFlexBox]}>
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.homeIndicator1Position]} />
      </View>
      <View style={styles.statusBarParent}>
        <View style={styles.statusBar}>
          <StatusBar barStyle="default" />
          <View style={[styles.leftTitleRight, styles.homeIndicator1Position]}>
            <Pressable
              style={[styles.leftAccessory, styles.accessoryFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft2.png")}
              />
              <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
            </Pressable>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>Contact Us</Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleTypo]}>
                Right Title
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.contactUsFor, styles.inputTypo]}>
          Contact us for Help share
        </Text>
        <Text style={[styles.address, styles.title1Typo]}>Address</Text>
        <Text
          style={[styles.house72Road, styles.title1Typo]}
        >{`House# 72, Road# 21, Landi Arbab, peshawar-1213 (near jamal international School &
 College, near Ring Road )

Call : 13301 (24/7)
Email : support@pathao.com`}</Text>
        <Text style={[styles.sendMessage, styles.title1Typo]}>
          Send Message
        </Text>
        <TextInput
          style={[styles.input, styles.inputLayout]}
          placeholder="Name"
          placeholderTextColor="#d0d0d0"
        />
        <TextInput
          style={[styles.input1, styles.inputLayout]}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#d0d0d0"
        />
        <TextInput
          style={[styles.input2, styles.inputLayout]}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input3}
          placeholder="Write your text"
          autoCapitalize="sentences"
          multiline={true}
          placeholderTextColor="#d0d0d0"
        />
        <TouchableHighlight
          style={[styles.ctaprimary, styles.titleFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "SettingsScreen" })
          }
        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Send Message
          </Text>
        </TouchableHighlight>
        <View style={[styles.homeIndicator2, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.homeIndicator1Position]}
          />
        </View>
        <Text style={[styles.yourMobileNumber, styles.inputTypo]}>
          Your mobile number
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  homeIndicator1Position: {
    left: "50%",
    position: "absolute",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  inputTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  inputLayout: {
    height: 60,
    width: 362,
    marginTop: 19,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightThemeTextHeading,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    display: "none",
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
  },
  leftTitle: {
    marginLeft: 5,
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    color: Color.textColorContentPrimary,
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    flex: 1,
  },
  title: {
    width: 191,
  },
  rightTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "right",
    display: "none",
  },
  rightAccessory: {
    justifyContent: "flex-end",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
  },
  leftTitleRight: {
    marginLeft: -196.5,
    top: 52,
    height: 42,
    width: 393,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar: {
    height: 94,
    zIndex: 0,
    width: 393,
  },
  contactUsFor: {
    zIndex: 1,
    marginTop: 19,
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  address: {
    zIndex: 2,
    marginTop: 19,
    color: Color.textColorContentSecondary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  house72Road: {
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 18,
    color: Color.neutralGray500,
    width: 353,
    zIndex: 3,
    marginTop: 19,
  },
  sendMessage: {
    zIndex: 4,
    marginTop: 19,
    color: Color.textColorContentSecondary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  input: {
    zIndex: 5,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    height: 60,
  },
  input1: {
    zIndex: 6,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    height: 60,
    backgroundColor: Color.shadesWhite,
  },
  input2: {
    zIndex: 7,
  },
  input3: {
    height: 118,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    zIndex: 8,
    width: 362,
    marginTop: 19,
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    zIndex: 9,
    marginTop: 19,
  },
  homeIndicator2: {
    zIndex: 10,
    marginTop: 19,
  },
  yourMobileNumber: {
    height: "2.7%",
    width: "41.98%",
    top: "63.62%",
    left: "8.91%",
    color: Color.neutralGray200,
    zIndex: 11,
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  statusBarParent: {
    marginLeft: 10,
    alignItems: "center",
  },
  contactUs: {
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.shadesWhite,
  },
});

export default ContactUS;
