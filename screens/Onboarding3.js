import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Onboarding3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding, styles.textFlexBox]}>
      <View style={styles.statusBar}>
        <View style={[styles.topStatusBar, styles.groupPosition]}>
          <Image
            style={[styles.notchIcon, styles.groupPosition]}
            contentFit="cover"
            source={require("../assets/notch.png")}
          />
          <View style={styles.rightSide}>
            <Image
              style={styles.batteryIcon}
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
            source={require("../assets/left-side3.png")}
          />
        </View>
        <TouchableOpacity
          style={[styles.leftTitleRight, styles.titleFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("EnableLocation")}
        >
          <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
            <Image
              style={styles.angleLeftIcon}
              contentFit="cover"
              source={require("../assets/angleleft.png")}
            />
            <Text style={styles.leftTitle}>Left Title</Text>
          </View>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.title1Typo]}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={styles.rightTitle}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.undrawMobileUxRe59hr1Icon}
        contentFit="cover"
        source={require("../assets/undraw-mobile-ux-re-59hr-1.png")}
      />
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.getOrProvide, styles.title1Typo]}>
          Get OR Provide Help
        </Text>
        <Text style={[styles.beAPart, styles.title1Typo]}>
          Be a part of a caring community. Whether you need help or have
          something to offer, Helping Hands is the platform where users connect
          to provide or receive assistance, fostering a culture of empathy and
          support.
        </Text>
      </View>
      <TouchableHighlight
        style={[styles.wrapper, styles.groupLayout]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("EnableLocation")}
      >
        <>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-22.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-31.png")}
          />
          <TouchableHighlight
            style={styles.container}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("EnableLocation")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-51.png")}
            />
          </TouchableHighlight>
          <Text style={styles.go}>Go</Text>
        </>
      </TouchableHighlight>
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
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
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 86,
    width: 86,
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  notchIcon: {
    width: 0,
    height: 0,
  },
  batteryIcon: {
    width: 24,
    height: 11,
    right: 0,
    top: 0,
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
    overflow: "hidden",
  },
  angleLeftIcon: {
    height: 24,
    display: "none",
    width: 24,
  },
  leftTitle: {
    color: Color.defaultSystemBlueLight,
    marginLeft: 5,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "none",
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    color: Color.labelColorLightPrimary,
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
  },
  rightTitle: {
    textAlign: "right",
    color: Color.textColorContentSecondary,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
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
  undrawMobileUxRe59hr1Icon: {
    width: 219,
    height: 200,
    marginTop: 71,
    overflow: "hidden",
  },
  getOrProvide: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    color: Color.textColorContentSecondary,
  },
  beAPart: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.neutralGray400,
    width: 280,
    marginTop: 12,
  },
  text: {
    marginTop: 71,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  container: {
    left: 8,
    top: 8,
    width: 70,
    height: 70,
    position: "absolute",
  },
  go: {
    top: 28,
    left: 31,
    fontSize: FontSize.headlineLgHLgMedium_size,
    letterSpacing: 0,
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  wrapper: {
    marginTop: 71,
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
    height: 34,
    marginTop: 71,
    width: 393,
  },
  onboarding: {
    backgroundColor: Color.shadesWhite,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Onboarding3;
