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
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.welcomeScreen, styles.textFlexBox]}>
      <View style={styles.statusBar}>
        <StatusBar barStyle="default" />
        <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
          <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
            <Image
              style={styles.angleLeftIcon}
              contentFit="cover"
              source={require("../assets/angleleft.png")}
            />
            <Text style={[styles.leftTitle, styles.titleTypo]}>Left Title</Text>
          </View>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.createTypo]}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.undrawMobileUxRe59hr1Icon}
        contentFit="cover"
        source={require("../assets/undraw-mobile-ux-re-59hr-11.png")}
      />
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.welcome, styles.createTypo]}>Welcome</Text>
        <Text style={[styles.haveABetter, styles.titleTypo]}>
          Have a better sharing experience
        </Text>
      </View>
      <TouchableHighlight
        style={[styles.ctaprimary, styles.ctaprimarySpaceBlock]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={[styles.createAnAccount, styles.createTypo]}>
          Create an account
        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        text="Log In"
        style={[styles.ctasecondary, styles.ctaprimarySpaceBlock]}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={[styles.createAnAccount1, styles.createTypo]}>Log In</Text>
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
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  createTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  ctaprimarySpaceBlock: {
    paddingVertical: Padding.p_base_5,
    paddingHorizontal: Padding.p_74xl_5,
    height: 54,
    width: 340,
    borderRadius: Border.br_5xs,
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  leftTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "left",
    marginLeft: 5,
    lineHeight: 23,
    display: "none",
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    color: Color.labelColorLightPrimary,
    textAlign: "center",
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
  },
  rightTitle: {
    textAlign: "right",
    color: Color.textColorContentSecondary,
    lineHeight: 23,
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
  undrawMobileUxRe59hr1Icon: {
    width: 219,
    height: 200,
    marginTop: 70,
    overflow: "hidden",
  },
  welcome: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    color: Color.textColorContentSecondary,
    textAlign: "center",
  },
  haveABetter: {
    lineHeight: 24,
    color: Color.neutralGray400,
    width: 280,
    marginTop: 12,
    textAlign: "center",
  },
  text: {
    marginTop: 70,
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
    backgroundColor: Color.primary700,
  },
  createAnAccount1: {
    color: Color.primary700,
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  ctasecondary: {
    borderStyle: "solid",
    borderColor: Color.primary700,
    borderWidth: 1,
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
    marginTop: 70,
    width: 393,
  },
  welcomeScreen: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default WelcomeScreen;
