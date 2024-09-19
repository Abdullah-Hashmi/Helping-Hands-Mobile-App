import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const AboutUsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.aboutUsScreen, styles.titleFlexBox]}>
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
                <Text style={styles.title1}>About Us</Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.titleTypo]}>
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
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    fontFamily: FontFamily.subheadLgSHLgRegular,
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
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    fontSize: FontSize.headlineSmHSmMedium_size,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.textColorContentPrimary,
    textAlign: "center",
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
    fontFamily: FontFamily.subheadLgSHLgRegular,
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
    marginTop: 386,
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
  aboutUsScreen: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 852,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default AboutUsScreen;
