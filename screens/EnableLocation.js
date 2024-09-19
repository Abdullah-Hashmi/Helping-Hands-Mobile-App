import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const EnableLocation = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.enableLocation, styles.titleWrapperFlexBox]}>
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
              source={require("../assets/battery1.png")}
            />
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={styles.mobileSignalIcon}
              contentFit="cover"
              source={require("../assets/mobile-signal1.png")}
            />
            <Image
              style={styles.recordingIndicatorIcon}
              contentFit="cover"
              source={require("../assets/recording-indicator1.png")}
            />
          </View>
          <Image
            style={styles.leftSideIcon}
            contentFit="cover"
            source={require("../assets/left-side1.png")}
          />
        </View>
        <View style={[styles.leftTitleRight, styles.leftTitleRightPosition]}>
          <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
            <Image
              style={styles.angleLeftIcon}
              contentFit="cover"
              source={require("../assets/angleleft1.png")}
            />
            <Text style={[styles.leftTitle, styles.titleTypo]}>Left Title</Text>
          </View>
          <View style={[styles.title, styles.titleWrapperFlexBox]}>
            <Text style={[styles.title1, styles.createTypo]}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
          </View>
        </View>
      </View>
      <View style={[styles.mapWrapper, styles.titleWrapperFlexBox]}>
        <Image
          style={styles.mapIcon}
          contentFit="cover"
          source={require("../assets/map1.png")}
        />
      </View>
      <View style={styles.backgroundBlur} />
      <View style={[styles.homeIndicator, styles.notchIconPosition]}>
        <View style={[styles.homeIndicator1, styles.leftTitleRightPosition]} />
      </View>
      <View style={[styles.enableLocationInner, styles.titleWrapperFlexBox]}>
        <View style={[styles.popupBackWrapper, styles.titleWrapperFlexBox]}>
          <View style={styles.popupBack} />
        </View>
      </View>
      <Image
        style={styles.locationIcon}
        contentFit="cover"
        source={require("../assets/location.png")}
      />
      <View style={[styles.text, styles.titleWrapperFlexBox]}>
        <Text style={[styles.enableYourLocation, styles.createTypo]}>
          Enable your location
        </Text>
        <Text style={[styles.chooseYourLocation, styles.createTypo]}>
          Choose your location to start find the request around you
        </Text>
      </View>
      <Pressable style={[styles.ctaprimary, styles.ctaprimaryFlexBox]}>
        <Text style={[styles.createAnAccount, styles.createTypo]}>
          Use my location
        </Text>
      </Pressable>
      <TouchableHighlight
        style={[styles.ctasecondary, styles.ctaprimaryFlexBox]}
        underlayColor="#0d7017"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("WelcomeScreen")}
      >
        <Text style={[styles.createAnAccount1, styles.createTypo]}>
          Skip for now
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  titleWrapperFlexBox: {
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
    display: "none",
  },
  createTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctaprimaryFlexBox: {
    paddingVertical: Padding.p_base_5,
    height: 54,
    borderRadius: Border.br_5xs,
    left: 41,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    display: "none",
    width: 24,
  },
  leftTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "left",
    marginLeft: 5,
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
    flexDirection: "row",
    alignItems: "center",
  },
  rightTitle: {
    textAlign: "right",
    color: Color.textColorContentSecondary,
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
    zIndex: 0,
    width: 393,
  },
  mapIcon: {
    width: 406,
    height: 846,
  },
  mapWrapper: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  backgroundBlur: {
    backgroundColor: Color.textColorContentSecondary,
    height: 804,
    opacity: 0.5,
    zIndex: 2,
    width: 393,
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
    top: 818,
    height: 34,
    zIndex: 3,
    width: 393,
  },
  popupBack: {
    borderRadius: Border.br_xs,
    width: 340,
    height: 459,
    backgroundColor: Color.shadesWhite,
  },
  popupBackWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  enableLocationInner: {
    top: 197,
    left: 26,
    zIndex: 4,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  locationIcon: {
    top: 227,
    left: 141,
    width: 110,
    height: 110,
    zIndex: 5,
    position: "absolute",
  },
  enableYourLocation: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    color: Color.textColorContentSecondary,
  },
  chooseYourLocation: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.neutralGray400,
    width: 280,
    marginTop: 12,
  },
  text: {
    top: 377,
    left: 56,
    zIndex: 6,
    position: "absolute",
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctaprimary: {
    top: 497,
    backgroundColor: Color.primary700,
    paddingHorizontal: Padding.p_71xl,
    zIndex: 7,
  },
  createAnAccount1: {
    color: Color.baseColorInfoColor,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctasecondary: {
    top: 571,
    paddingHorizontal: Padding.p_87xl,
    zIndex: 8,
  },
  enableLocation: {
    width: "100%",
    height: 852,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.shadesWhite,
  },
});

export default EnableLocation;
