import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.settingsScreen, styles.titleFlexBox]}>
      <View style={styles.settingsScreenInner}>
        <View style={styles.titleFlexBox}>
          <View style={styles.statusBarParent}>
            <View style={styles.statusBar}>
              <StatusBar
                style={styles.topStatusBarPosition}
                barStyle="default"
              />
              <View
                style={[styles.leftTitleRight, styles.leftTitleRightPosition]}
              >
                <Pressable
                  style={[styles.leftAccessory, styles.accessoryFlexBox]}
                  onPress={() => navigation.goBack()}
                >
                  <Image
                    style={styles.angleLeftIcon}
                    contentFit="cover"
                    source={require("../assets/angleleft.png")}
                  />
                  <Text style={[styles.leftTitle, styles.leftTitleFlexBox]}>
                    Back
                  </Text>
                </Pressable>
                <View style={[styles.title, styles.titleFlexBox]}>
                  <Text style={[styles.title1, styles.title1Typo]}>
                    Settings
                  </Text>
                </View>
                <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                  <Text style={[styles.rightTitle, styles.titleTypo]}>
                    Right Title
                  </Text>
                </View>
              </View>
            </View>
            <TouchableHighlight
              style={styles.settings}
              underlayColor="#177d26"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("SetPasswordScreen")}
            >
              <>
                <View style={styles.settingsChildShadowBox} />
                <Text style={[styles.changePassword, styles.title1Typo]}>
                  Change Password
                </Text>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow1.png")}
                />
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.settings}
              underlayColor="#116910"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ChangeHelpScreen")}
            >
              <>
                <View style={styles.settingsChildShadowBox} />
                <Text style={[styles.changePassword, styles.title1Typo]}>
                  Change Help
                </Text>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow1.png")}
                />
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.settings}
              underlayColor="#167908"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("PrivacyPolicy")}
            >
              <>
                <View style={styles.settingsChildShadowBox} />
                <Text style={[styles.changePassword, styles.title1Typo]}>
                  Privacy Policy
                </Text>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow1.png")}
                />
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.settings}
              underlayColor="#16842a"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("ContactUS")}
            >
              <>
                <View style={styles.settingsChildShadowBox} />
                <Text style={[styles.changePassword, styles.title1Typo]}>
                  Contact Us
                </Text>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow1.png")}
                />
              </>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.settings}
              underlayColor="#12752c"
              activeOpacity={0.2}
              onPress={() => navigation.navigate("DeleteAccount")}
            >
              <>
                <View style={styles.settingsChildShadowBox} />
                <Text style={[styles.changePassword, styles.title1Typo]}>
                  Delete Account
                </Text>
                <Image
                  style={styles.rightArrowIcon}
                  contentFit="cover"
                  source={require("../assets/right-arrow1.png")}
                />
              </>
            </TouchableHighlight>
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
  titleFlexBox: {
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
  leftTitleFlexBox: {
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  title1Typo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  titleTypo: {
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
  leftTitle: {
    marginLeft: 5,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
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
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  title: {
    width: 191,
    flexDirection: "row",
    justifyContent: "center",
  },
  rightTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "right",
    display: "none",
  },
  rightAccessory: {
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    justifyContent: "flex-end",
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
  settingsChildShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.baseColorPrimaryColor,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.24)",
    borderRadius: Border.br_5xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.shadesWhite,
  },
  changePassword: {
    top: "29.41%",
    left: "3.04%",
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 22,
    textAlign: "left",
    color: Color.textColorContentSecondary,
    position: "absolute",
  },
  rightArrowIcon: {
    height: "47.06%",
    width: "6.63%",
    top: "27.45%",
    right: "2.21%",
    bottom: "25.49%",
    left: "91.16%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settings: {
    width: 362,
    height: 51,
    marginTop: 19,
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
    marginTop: 374,
  },
  settingsScreenInner: {
    zIndex: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  homeIndicator2: {
    top: 818,
    zIndex: 1,
    display: "none",
    left: 0,
    position: "absolute",
  },
  settingsScreen: {
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite,
    flex: 1,
  },
});

export default SettingsScreen;
