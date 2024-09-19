import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const ComplainScuessful = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.complainScuessful, styles.titleFlexBox]}>
      <View style={styles.frameParent}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar style={styles.popupChildPosition} barStyle="default" />
            <View style={styles.leftTitleRight}>
              <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/angleleft.png")}
                />
                <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
              </View>
              <View style={[styles.title, styles.titleFlexBox]}>
                <Text style={[styles.title1, styles.thankTypo]}>Complain</Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.titleTypo]}>
                  Right Title
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.popup}>
            <View style={[styles.popupChild, styles.popupChildLayout]} />
            <Text style={[styles.thankYou, styles.thankTypo]}>
              Send successful
            </Text>
            <Image
              style={styles.popupItem}
              contentFit="cover"
              source={require("../assets/group-647611.png")}
            />
            <Text style={[styles.thankYouFor, styles.thankTypo]}>
              Your complain has been send successful
            </Text>
            <Image
              style={[styles.crossIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/cross2.png")}
            />
            <TouchableHighlight
              style={[styles.ctaprimary, styles.popupChildLayout]}
              underlayColor="#fff"
              activeOpacity={0.2}
              onPress={() =>
                navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
              }
            >
              <Text style={[styles.createAnAccount, styles.thankTypo]}>
                Back Home
              </Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View style={styles.homeIndicator1} />
        </View>
      </View>
      <View style={[styles.homeIndicator2, styles.homeLayout]}>
        <View style={styles.homeIndicator1} />
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
  popupChildPosition: {
    top: 0,
    left: 0,
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
  thankTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  popupChildLayout: {
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    textAlign: "left",
    marginLeft: 5,
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
    left: "50%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  statusBar: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 397,
    height: 95,
  },
  popupChild: {
    width: 361,
    height: 355,
    left: 0,
    top: 0,
    backgroundColor: Color.shadesWhite,
  },
  thankYou: {
    top: 192,
    left: 91,
    fontSize: FontSize.titleSmTSmMedium_size,
    lineHeight: 28,
    color: Color.textAndIconContentTertiary,
    position: "absolute",
  },
  popupItem: {
    top: 45,
    left: 119,
    width: 124,
    height: 124,
    position: "absolute",
  },
  thankYouFor: {
    top: "63.94%",
    left: "16.01%",
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 18,
    color: Color.neutralGray500,
    position: "absolute",
  },
  crossIcon: {
    top: 9,
    left: 327,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    position: "absolute",
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctaprimary: {
    top: 277,
    left: 11,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  popup: {
    width: 366,
    marginTop: 110,
    height: 355,
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
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    marginTop: 258,
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
  complainScuessful: {
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.shadesWhite,
  },
});

export default ComplainScuessful;
