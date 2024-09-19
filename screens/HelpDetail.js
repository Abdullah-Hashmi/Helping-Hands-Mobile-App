import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const HelpDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.helpDetail, styles.parentFlexBox]}>
      <View style={[styles.statusBarParent, styles.parentFlexBox]}>
        <View style={styles.statusBar}>
          <View style={[styles.topStatusBar, styles.notchIconPosition]}>
            <Image
              style={[styles.notchIcon, styles.notchIconPosition]}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={[styles.batteryIcon, styles.batteryIconPosition]}
                contentFit="cover"
                source={require("../assets/battery2.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi2.png")}
              />
              <Image
                style={styles.mobileSignalIcon}
                contentFit="cover"
                source={require("../assets/mobile-signal2.png")}
              />
              <Image
                style={styles.recordingIndicatorIcon}
                contentFit="cover"
                source={require("../assets/recording-indicator2.png")}
              />
            </View>
            <Image
              style={styles.leftSideIcon}
              contentFit="cover"
              source={require("../assets/left-side2.png")}
            />
          </View>
          <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
            <Pressable
              style={[styles.leftAccessory, styles.accessoryFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={[styles.leftTitle, styles.titleLayout]}>Back</Text>
            </Pressable>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>
                Help Details
              </Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleLayout]}>
                Right Title
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={styles.welcomeToHelping}
        >{`Welcome to "Helping Hands," a community-driven platform dedicated to fostering connections and making assistance accessible to everyone, anytime, and anywhere. Our mission is to bridge the gap between those in need and those eager to help, creating a supportive environment where users can provide or receive assistance seamlessly. "Helping Hands" goes beyond solving immediate challenges; it aims to cultivate a culture of empathy and community, making the world a better place, one helping hand at a time. Join us in building a network of compassion and support.

`}</Text>
      </View>
      <View style={[styles.ctaprimaryParent, styles.parentFlexBox]}>
        <Pressable
          style={[styles.ctaprimary, styles.titleFlexBox]}
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Acknowledge
          </Text>
        </Pressable>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator2, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  notchIconPosition: {
    left: 0,
    position: "absolute",
  },
  batteryIconPosition: {
    right: 0,
    top: 0,
  },
  titleFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  titleLayout: {
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  },
  batteryIcon: {
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  recordingIndicatorIcon: {
    top: -9,
    right: 56,
    width: 6,
    height: 6,
    display: "none",
    position: "absolute",
  },
  rightSide: {
    top: 20,
    right: 14,
    width: 67,
    height: 11,
    position: "absolute",
  },
  leftSideIcon: {
    top: 16,
    left: 3,
    width: 54,
    height: 21,
    position: "absolute",
  },
  topStatusBar: {
    height: 52,
    right: 0,
    top: 0,
    overflow: "hidden",
  },
  angleLeftIcon: {
    height: 24,
    width: 24,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    textAlign: "left",
    marginLeft: 5,
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    color: Color.textColorContentPrimary,
    flex: 1,
  },
  title: {
    width: 191,
  },
  rightTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "right",
    fontFamily: FontFamily.subheadLgSHLgRegular,
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
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  welcomeToHelping: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 22,
    color: Color.textAndIconContentTertiary,
    textAlign: "justify",
    width: 359,
    marginTop: 30,
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  statusBarParent: {
    zIndex: 0,
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 324,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
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
    marginTop: 279,
  },
  ctaprimaryParent: {
    zIndex: 1,
    marginTop: 53,
  },
  homeIndicator2: {
    top: 818,
    zIndex: 2,
    display: "none",
    left: 0,
    position: "absolute",
  },
  helpDetail: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default HelpDetail;
