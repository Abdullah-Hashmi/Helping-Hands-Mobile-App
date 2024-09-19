import * as React from "react";
import { StatusBar, StyleSheet, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const HelpAndSupport = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.helpAndSupport, styles.titleFlexBox]}>
      <View style={styles.frameParent}>
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
                <Text style={[styles.leftTitle, styles.leftTitleFlexBox]}>
                  Back
                </Text>
              </Pressable>
              <View style={[styles.title, styles.titleFlexBox]}>
                <Text style={[styles.title1, styles.title1Typo]}>
                  Help and Support
                </Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.titleTypo]}>
                  Right Title
                </Text>
              </View>
            </View>
          </View>
          <Text style={[styles.loremIpsumDolor, styles.titleTypo]}>
            Lorem ipsum dolor sit amet consectetur. Sit pulvinar mauris mauris
            eu nibh semper nisl pretium laoreet. Sed non faucibus ac lectus eu
            arcu. Nulla sit congue facilisis vestibulum egestas nisl feugiat
            pharetra. Odio sit tortor morbi at orci ipsum dapibus interdum.
            Lorem felis est aliquet arcu nullam pellentesque. Et habitasse ac
            arcu et nunc euismod rhoncus facilisis sollicitudin.
          </Text>
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
      <Text style={[styles.helpAndSupport1, styles.title1Typo]}>
        Help and Support
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
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
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
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
    color: Color.textColorContentPrimary,
    textAlign: "center",
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  loremIpsumDolor: {
    color: Color.neutralGray600,
    textAlign: "justify",
    width: 362,
    marginTop: 75,
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
    marginTop: 442,
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
  helpAndSupport1: {
    top: 124,
    left: 15,
    zIndex: 2,
    textAlign: "left",
    color: Color.textColorContentSecondary,
    position: "absolute",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
  },
  helpAndSupport: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flex: 1,
  },
});

export default HelpAndSupport;
