import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { RadioButton } from "react-native-paper";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const ChangeHelpScreen = () => {
  const [languageValue, setLanguageValue] = useState("");

  return (
    <ScrollView
      style={styles.changeHelpScreen}
      horizontal={true}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.changeHelpScreenScrollViewContent}
    >
      <View style={styles.statusBarParent}>
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
                source={require("../assets/recording-indicator3.png")}
              />
            </View>
            <Image
              style={styles.leftSideIcon}
              contentFit="cover"
              source={require("../assets/left-side4.png")}
            />
          </View>
          <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
            <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
              <Image
                style={styles.angleLeftIcon}
                contentFit="cover"
                source={require("../assets/angleleft.png")}
              />
              <Text style={styles.leftTitle}>Back</Text>
            </View>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>
                Change Help
              </Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={styles.rightTitle}>Right Title</Text>
            </View>
          </View>
        </View>
        <View style={styles.language}>
          <RadioButton.Group
            value={languageValue}
            onValueChange={setLanguageValue}
          >
            <View>
              <View style={styles.view1}>
                <RadioButton
                  color="#6750a4"
                  uncheckedColor="#49454f"
                  value=""
                />
                <Text />
              </View>
            </View>
          </RadioButton.Group>
        </View>
        <View style={styles.language}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.english, styles.englishTypo1]}>Hindi</Text>
          <Text style={[styles.english1, styles.englishTypo]}>Hindi</Text>
          <Image
            style={[styles.checkCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-checkcircle1.png")}
          />
          <Image
            style={[styles.flagIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/flag1.png")}
          />
        </View>
        <View style={styles.language}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.english, styles.englishTypo1]}>Arabic</Text>
          <Text style={[styles.english1, styles.englishTypo]}>Arabic</Text>
          <Image
            style={[styles.checkCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-checkcircle1.png")}
          />
          <Image
            style={[styles.flagIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/flag11.png")}
          />
        </View>
        <View style={styles.language}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.english, styles.englishTypo1]}>French</Text>
          <Text style={[styles.english1, styles.englishTypo]}>French</Text>
          <Image
            style={[styles.checkCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-checkcircle1.png")}
          />
          <Image
            style={[styles.flagIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/flag2.png")}
          />
        </View>
        <View style={styles.language}>
          <View style={styles.rectangleShadowBox} />
          <Text style={styles.englishTypo1} />
          <Text style={[styles.english1, styles.englishTypo]}>German</Text>
          <Image
            style={[styles.checkCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-checkcircle1.png")}
          />
          <Image
            style={[styles.flagIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/flag3.png")}
          />
        </View>
        <View style={styles.language}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.english, styles.englishTypo1]}>Portuguese</Text>
          <Text style={styles.englishTypo} />
          <Image
            style={[styles.checkCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-checkcircle1.png")}
          />
          <Image
            style={[styles.flagIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/flag4.png")}
          />
        </View>
        <View style={styles.language}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.english, styles.englishTypo1]}>Turkish</Text>
          <Text style={[styles.english1, styles.englishTypo]}>Turkis</Text>
          <Image
            style={[styles.checkCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-checkcircle1.png")}
          />
          <Image
            style={[styles.flagIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/flag5.png")}
          />
        </View>
        <View style={styles.language}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.english, styles.englishTypo1]}>Dutch</Text>
          <Text style={[styles.english1, styles.englishTypo]}>Nederlands</Text>
          <Image
            style={[styles.checkCircleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/-checkcircle1.png")}
          />
          <Image
            style={[styles.flagIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/flag6.png")}
          />
        </View>
        <View style={styles.ctaprimary}>
          <Text style={[styles.createAnAccount, styles.title1Typo]}>Save</Text>
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
      <Text style={[styles.medical, styles.medicalTypo]}>Medical</Text>
      <Text style={[styles.medical1, styles.medicalTypo]}>Medical</Text>
      <Text style={[styles.medical2, styles.medicalTypo]}>Medical</Text>
      <Text style={[styles.medical3, styles.medicalTypo]}>Medical</Text>
      <Text style={[styles.medical4, styles.medicalTypo]}>Medical</Text>
      <Text style={[styles.medical5, styles.medicalTypo]}>Medical</Text>
      <Text style={[styles.medical6, styles.medicalTypo]}>Medical</Text>
      <Text style={[styles.medical7, styles.medicalTypo]}>Medical</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  languageText: {},
  view: {},
  changeHelpScreenScrollViewContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  notchIconPosition: {
    left: 0,
    position: "absolute",
  },
  batteryIconPosition: {
    right: 0,
    top: 0,
  },
  titleFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
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
  englishTypo1: {
    color: Color.textAndIconContentTertiary,
    lineHeight: 24,
    left: "19.61%",
    top: "17.19%",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  englishTypo: {
    color: Color.baseColorInfoColor,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    top: "54.69%",
    left: "19.61%",
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  leftTitleRightPosition: {
    left: "50%",
    position: "absolute",
  },
  medicalTypo: {
    color: Color.neutralGray200,
    left: 40,
    top: "50%",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
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
    width: 24,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    marginLeft: 5,
    textAlign: "left",
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
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    flex: 1,
  },
  title: {
    width: 191,
  },
  rightTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "right",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
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
  view1: {
    flexDirection: "row",
    alignItems: "center",
  },
  language: {
    width: 362,
    height: 64,
    marginTop: 16,
  },
  rectangleShadowBox: {
    borderWidth: 0.5,
    borderColor: Color.neutralGray200,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 1,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "rgba(0, 0, 0, 0.24)",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_5xs,
    position: "absolute",
    width: "100%",
    backgroundColor: Color.shadesWhite,
  },
  english: {
    display: "none",
  },
  english1: {
    display: "none",
  },
  checkCircleIcon: {
    height: "37.5%",
    width: "6.63%",
    top: "31.25%",
    right: "2.49%",
    bottom: "31.25%",
    left: "90.88%",
  },
  flagIcon: {
    height: "50%",
    width: "12.71%",
    top: "25%",
    right: "84.81%",
    bottom: "25%",
    left: "2.49%",
    display: "none",
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
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    borderRadius: Border.br_5xs,
    marginTop: 16,
    justifyContent: "center",
    flexDirection: "row",
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
    marginTop: 16,
  },
  statusBarParent: {
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
  medical: {
    marginTop: -281,
    zIndex: 2,
  },
  medical1: {
    marginTop: -201,
    zIndex: 3,
  },
  medical2: {
    marginTop: -121,
    zIndex: 4,
  },
  medical3: {
    marginTop: -41,
    zIndex: 5,
  },
  medical4: {
    marginTop: 39,
    zIndex: 6,
  },
  medical5: {
    marginTop: 119,
    zIndex: 7,
  },
  medical6: {
    marginTop: 199,
    zIndex: 8,
  },
  medical7: {
    marginTop: 279,
    zIndex: 9,
  },
  changeHelpScreen: {
    height: 852,
    maxHeight: 852,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.shadesWhite,
    flex: 1,
  },
});

export default ChangeHelpScreen;
