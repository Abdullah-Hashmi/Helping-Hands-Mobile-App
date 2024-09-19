import * as React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ThankYouScreen = () => {
  return (
    <View style={[styles.thankYouScreen, styles.titleParentFlexBox]}>
      <View style={[styles.statusBarParent, styles.titleParentFlexBox]}>
        <View style={styles.statusBar}>
          <StatusBar style={styles.topStatusBarPosition} barStyle="default" />
          <View style={[styles.leftTitleRight, styles.leftTitleRightPosition]}>
            <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
            </View>
            <View style={[styles.title, styles.titleParentFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>
                Request for rent
              </Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleTypo]}>
                Right Title
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.frameParent, styles.titleParentFlexBox]}>
          <View style={styles.titleParentFlexBox}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-64762.png")}
            />
            <Text style={[styles.thankYou, styles.thankYouTypo]}>
              Thank you
            </Text>
            <Text style={[styles.forUsingOur, styles.title1Typo]}>
              for using our services
            </Text>
            <Text style={[styles.beAPart, styles.beAPartTypo]}>
              Be a part of a caring community. Whether you need help or have
              something to offer, Helping Hands is the platform where users
              connect to provide or receive assistance, fostering a culture of
              empathy and support.
            </Text>
            <Text
              style={[styles.youeFeedbackWill, styles.beAPartTypo]}
            >{`Youe feedback will help us to improve your 
driving experience better`}</Text>
            <View style={[styles.ctaprimary, styles.titleParentFlexBox]}>
              <Text style={[styles.createAnAccount, styles.title1Typo]}>
                Please Feedback
              </Text>
            </View>
            <Text style={[styles.howIsOur, styles.beAPartLayout]}>
              How is our app?
            </Text>
          </View>
          <View style={[styles.homeIndicator, styles.homeLayout]}>
            <View
              style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
            />
          </View>
        </View>
      </View>
      <View style={[styles.homeIndicator2, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleParentFlexBox: {
    justifyContent: "center",
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
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  thankYouTypo: {
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  beAPartTypo: {
    color: Color.neutralGray400,
    marginTop: 21,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  beAPartLayout: {
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    marginLeft: 5,
    textAlign: "left",
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    color: Color.textColorContentPrimary,
    textAlign: "center",
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
    flexDirection: "row",
    alignItems: "center",
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
    alignItems: "center",
    flexDirection: "row",
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  frameChild: {
    width: 124,
    height: 124,
    zIndex: 0,
  },
  thankYou: {
    fontSize: FontSize.headlineLgHLgMedium_size,
    lineHeight: 26,
    marginTop: 21,
    zIndex: 1,
    textAlign: "center",
  },
  forUsingOur: {
    lineHeight: 18,
    color: Color.labelColorLightPrimary,
    zIndex: 2,
    fontSize: FontSize.captionCaptionMedium_size,
    marginTop: 21,
    textAlign: "center",
  },
  beAPart: {
    width: 263,
    height: 236,
    zIndex: 3,
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
  },
  youeFeedbackWill: {
    lineHeight: 16,
    zIndex: 4,
    fontSize: FontSize.captionCaptionMedium_size,
  },
  createAnAccount: {
    color: Color.shadesWhite,
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    zIndex: 5,
    marginTop: 21,
    flexDirection: "row",
    alignItems: "center",
  },
  howIsOur: {
    top: 404,
    left: 105,
    zIndex: 6,
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
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
    marginTop: 125,
  },
  frameParent: {
    marginTop: 16,
  },
  statusBarParent: {
    zIndex: 0,
  },
  homeIndicator2: {
    top: 818,
    zIndex: 1,
    display: "none",
    left: 0,
    position: "absolute",
  },
  thankYouScreen: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default ThankYouScreen;
