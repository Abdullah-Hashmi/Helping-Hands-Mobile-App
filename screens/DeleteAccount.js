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
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const DeleteAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.deleteAccount, styles.titleFlexBox]}>
      <View style={[styles.frameParent, styles.titleFlexBox]}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar style={styles.topStatusBarPosition} barStyle="default" />
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
                <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
              </Pressable>
              <View style={[styles.title, styles.titleFlexBox]}>
                <Text style={[styles.title1, styles.title1Typo]}>
                  Delete Account
                </Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.titleTypo]}>
                  Right Title
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[styles.areYouSure, styles.titleTypo]}
          >{`Are you sure you want to delete your account? Please read how account deletion will affect.
Deleting your account removes personal information our database. Tour email becomes permanently reserved and same email cannot be re-use to register a new account.`}</Text>
          <TouchableHighlight
            style={[styles.ctaprimary, styles.titleFlexBox]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={[styles.createAnAccount, styles.title1Typo]}>
              Delete
            </Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <Pressable
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
            onPress={() => {}}
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
    flexDirection: "row",
    justifyContent: "center",
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
  areYouSure: {
    color: Color.neutralGray600,
    textAlign: "justify",
    width: 362,
    marginTop: 31,
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
    borderRadius: Border.br_5xs,
    backgroundColor: Color.baseColorErrorColor,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    marginTop: 31,
    flexDirection: "row",
    justifyContent: "center",
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
    marginTop: 424,
  },
  frameParent: {
    zIndex: 0,
  },
  homeIndicator2: {
    top: 818,
    zIndex: 1,
    display: "none",
    left: 0,
    position: "absolute",
  },
  deleteAccount: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 852,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DeleteAccount;
