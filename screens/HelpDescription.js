import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const HelpDescription = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.helpDescription}>
      <View style={[styles.statusBarParent, styles.parentPosition]}>
        <View style={styles.statusBar}>
          <StatusBar style={styles.parentPosition} barStyle="default" />
          <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
            <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
            </View>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>Title</Text>
            </View>
            <View style={[styles.rightAccessory, styles.frameParentFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
            </View>
          </View>
        </View>
        <View style={[styles.text, styles.titleFlexBox]}>
          <Text style={[styles.enterHelpInformation, styles.title1Typo]}>
            Enter Help Information
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.titleFlexBox}>
          <TextInput
            style={[styles.input, styles.inputTypo]}
            placeholder="Help Type"
            placeholderTextColor="#716666"
          />
          <TextInput
            style={[styles.input1, styles.inputTypo]}
            placeholder="Describe Your Help! "
            placeholderTextColor="#716666"
          />
          <TouchableHighlight
            style={[styles.ctaprimary, styles.titleFlexBox]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("LocationScreenConfirm")}
          >
            <Text style={[styles.createAnAccount, styles.title1Typo]}>
              Submit
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.homeIndicator}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    left: 0,
    position: "absolute",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  titleTypo: {
    fontFamily: FontFamily.subheadLgSHLgRegular,
    color: Color.textColorContentSecondary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  frameParentFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  inputTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  angleLeftIcon: {
    width: 24,
    height: 24,
  },
  leftTitle: {
    textAlign: "left",
    marginLeft: 5,
    color: Color.textColorContentSecondary,
  },
  leftAccessory: {
    padding: Padding.p_5xs,
    alignItems: "center",
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
    justifyContent: "center",
  },
  rightTitle: {
    textAlign: "right",
    display: "none",
    color: Color.textColorContentSecondary,
  },
  rightAccessory: {
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  leftTitleRight: {
    marginLeft: -196.5,
    top: 52,
    height: 42,
    flexDirection: "row",
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  enterHelpInformation: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    width: 292,
    color: Color.textColorContentSecondary,
  },
  text: {
    marginTop: 50,
  },
  statusBarParent: {
    alignItems: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  input: {
    width: 362,
    height: 60,
  },
  input1: {
    width: 364,
    height: 118,
    marginTop: 16,
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    textAlign: "center",
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
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
    marginTop: 330,
    width: 393,
  },
  frameParent: {
    top: 224,
    left: 0,
    position: "absolute",
    justifyContent: "flex-end",
  },
  helpDescription: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 865,
    overflow: "hidden",
    flex: 1,
  },
});

export default HelpDescription;
