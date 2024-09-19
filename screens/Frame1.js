import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Frame1 = () => {
  return <View style={styles.homeScreenShoutForHelpParent} />;
};

const styles = StyleSheet.create({
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  statusPosition: {
    left: 0,
    top: 0,
  },
  titleParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  hamburgerMenu1Position: {
    left: 5,
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  rectangleLayout1: {
    width: 34,
    height: 34,
  },
  searchLayout: {
    height: 54,
    width: 336,
  },
  childBorder: {
    borderColor: Color.primary200,
    backgroundColor: Color.primary50,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
  },
  searchIconPosition: {
    top: 15,
    position: "absolute",
  },
  homePosition: {
    top: 81,
    position: "absolute",
  },
  helpTypo: {
    color: Color.shadesWhite,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  home1Typo: {
    color: Color.baseColorPrimaryColor,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  offer1Typo: {
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  homeScreenShoutForHelpParent: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
});

export default Frame1;
