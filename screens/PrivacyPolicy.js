import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const PrivacyPolicy = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.privacyPolicy, styles.titleFlexBox]}>
      <View style={styles.frameParent}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar style={styles.topStatusBarPosition} barStyle="default" />
            <View
              style={[styles.leftTitleRight, styles.leftTitleRightPosition]}
            >
              <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
                <Image
                  style={styles.angleLeftIcon}
                  contentFit="cover"
                  source={require("../assets/angleleft.png")}
                />
                <Pressable
                  style={styles.leftTitle}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={[styles.back, styles.backFlexBox]}>Back</Text>
                </Pressable>
              </View>
              <View style={[styles.title, styles.titleFlexBox]}>
                <Text style={[styles.title1, styles.title1Typo]}>
                  Privacy Policy
                </Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.backTypo]}>
                  Right Title
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[styles.welcomeToHelping, styles.backTypo]}
          >{`Welcome to "Helping Hands," where we prioritize the privacy of our users. We collect essential information during the registration process, such as your name and contact details, to facilitate the connection between individuals seeking help and those offering assistance. This data is securely stored and used exclusively for improving our platform's functionality and enhancing user experience. We adhere to industry-standard security measures to protect your information, and your preferences, including profile visibility and communication settings, are under your control. We may share aggregated, anonymized data for research purposes or with your explicit consent. Any updates to this Privacy Policy will be communicated to users. For inquiries or concerns, please contact us at [your contact details]. Thank you for being a part of the "Helping Hands" community.
`}</Text>
        </View>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator2, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
      <Text style={[styles.privacyPolicyFor, styles.title1Typo]}>
        Privacy Policy for Ride share
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  topStatusBarPosition: {
    left: 0,
    position: "absolute",
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  backFlexBox: {
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  title1Typo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
  },
  backTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
  },
  back: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  leftTitle: {
    marginLeft: 5,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    color: Color.textColorContentPrimary,
    textAlign: "center",
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
    width: 393,
  },
  welcomeToHelping: {
    color: Color.neutralGray600,
    textAlign: "justify",
    width: 362,
    marginTop: 75,
  },
  statusBarParent: {
    alignItems: "center",
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
    marginTop: 143,
  },
  frameParent: {
    zIndex: 0,
    alignItems: "center",
  },
  homeIndicator2: {
    top: 818,
    zIndex: 1,
    display: "none",
    left: 0,
    position: "absolute",
  },
  privacyPolicyFor: {
    top: 124,
    left: 15,
    zIndex: 2,
    textAlign: "left",
    color: Color.textColorContentSecondary,
    position: "absolute",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
  },
  privacyPolicy: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default PrivacyPolicy;
