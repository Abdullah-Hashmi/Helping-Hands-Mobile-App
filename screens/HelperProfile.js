import * as React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const HelperProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.helperProfile, styles.titleParentFlexBox]}>
      <View style={[styles.frameParent, styles.titleParentFlexBox]}>
        <ScrollView
          style={styles.statusBarParent}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.frameScrollViewContent}
        >
          <View style={styles.statusBar}>
            <StatusBar style={styles.typeOfHelpPosition} barStyle="default" />
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
              <View style={[styles.title, styles.titleParentFlexBox]}>
                <Text style={[styles.title1, styles.createTypo]}>
                  Select transport
                </Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.titleTypo]}>
                  Right Title
                </Text>
              </View>
            </View>
          </View>
          <ImageBackground
            style={styles.frameChild}
            resizeMode="cover"
            source={require("../assets/ellipse479.png")}
          />
        </ScrollView>
        <View style={styles.specifications}>
          <Text
            style={[styles.typeOfHelp, styles.typeOfHelpClr]}
          >{`Type of Help `}</Text>
          <View style={[styles.card1Parent, styles.titleParentFlexBox]}>
            <View style={styles.cardLayout1}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.hp, styles.hpTypo]} />
              <Text style={[styles.maxPower, styles.maxTypo]}>Help Type 1</Text>
              <Image
                style={styles.maxPowerIcon}
                contentFit="cover"
                source={require("../assets/max-power1.png")}
              />
            </View>
            <View style={[styles.card11, styles.cardLayout1]}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.hp1, styles.hpTypo]}>10km per litre</Text>
              <Text style={[styles.maxPower1, styles.maxTypo]}>
                Help Type 2
              </Text>
              <Image
                style={styles.maxPowerIcon}
                contentFit="cover"
                source={require("../assets/fual1.png")}
              />
            </View>
            <View style={[styles.card11, styles.cardLayout1]}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.hp2, styles.hpTypo]}>230kph</Text>
              <Text style={[styles.maxPower1, styles.maxTypo]}>
                Help Type 3
              </Text>
              <Image
                style={styles.maxPowerIcon}
                contentFit="cover"
                source={require("../assets/speed1.png")}
              />
            </View>
            <View style={[styles.card11, styles.cardLayout1]}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.hp3, styles.hpTypo]}>2.5sec</Text>
              <Text style={[styles.maxPower1, styles.maxTypo]}>
                Help Type 4
              </Text>
              <Image
                style={styles.maxPowerIcon}
                contentFit="cover"
                source={require("../assets/mph.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View>
            <View style={styles.cardLayout}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.model, styles.modelTypo]}>Info 1</Text>
              <Text style={[styles.gt5000, styles.modelTypo]}>GT5000</Text>
            </View>
            <View style={[styles.card3, styles.cardLayout]}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.model, styles.modelTypo]}>Info 2</Text>
              <Text style={[styles.gt50001, styles.modelTypo]}>760hp</Text>
            </View>
            <View style={[styles.card3, styles.cardLayout]}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.model, styles.modelTypo]}>Info 3</Text>
              <Text style={[styles.gt50002, styles.modelTypo]}>Red</Text>
            </View>
            <View style={[styles.card3, styles.cardLayout]}>
              <View style={[styles.card1Child, styles.card1ChildBorder]} />
              <Text style={[styles.model, styles.modelTypo]}>Info 4</Text>
              <Text style={[styles.gt50003, styles.modelTypo]}>Octane</Text>
            </View>
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
      <Text style={[styles.emilyGrace, styles.typeOfHelpClr]}>Emily Grace</Text>
      <Text style={[styles.reviews, styles.modelTypo]}>4.9 (531 reviews)</Text>
      <Image
        style={styles.helperProfileChild}
        contentFit="cover"
        source={require("../assets/star-1.png")}
      />
      <Image
        style={[styles.rightArrowIcon, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/right-arrow.png")}
      />
      <Image
        style={[styles.leftArrowIcon, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/left-arrow.png")}
      />
      <Text style={[styles.helperInfo, styles.typeOfHelpClr]}>Helper info</Text>
      <Pressable
        style={[styles.ctasecondary, styles.ctaprimaryLayout]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles.createAnAccount, styles.createTypo]}>Cancel</Text>
      </Pressable>
      <Pressable
        style={[styles.ctaprimary, styles.ctaprimaryLayout]}
        onPress={() => navigation.navigate("LocationScreenConfirm")}
      >
        <Text style={[styles.createAnAccount1, styles.createTypo]}>
          Shout Now
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  frameScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  titleParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  typeOfHelpPosition: {
    top: 0,
    left: 0,
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
  createTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  typeOfHelpClr: {
    color: Color.textAndIconContentTertiary,
    textAlign: "left",
    position: "absolute",
  },
  card1ChildBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  hpTypo: {
    fontSize: FontSize.size_5xs,
    top: "70.67%",
    color: Color.textAndIconContentTertiary,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    position: "absolute",
  },
  maxTypo: {
    fontSize: FontSize.size_3xs,
    top: "50.67%",
    color: Color.textAndIconContentTertiary,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    position: "absolute",
  },
  cardLayout1: {
    height: 75,
    width: 77,
  },
  modelTypo: {
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    position: "absolute",
  },
  cardLayout: {
    height: 44,
    width: 362,
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  arrowIconPosition: {
    top: 278,
    height: 24,
    width: 24,
    position: "absolute",
  },
  ctaprimaryLayout: {
    paddingVertical: Padding.p_base_5,
    paddingHorizontal: Padding.p_29xl,
    height: 54,
    width: 172,
    top: 811,
    borderRadius: Border.br_5xs,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  angleLeftIcon: {
    height: 24,
    width: 24,
  },
  leftTitle: {
    color: Color.textColorContentSecondary,
    marginLeft: 5,
    textAlign: "left",
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    color: Color.textColorContentPrimary,
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    textAlign: "center",
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
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
  frameChild: {
    width: 180,
    height: 180,
    marginTop: 104,
  },
  statusBarParent: {
    flex: 1,
  },
  typeOfHelp: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    color: Color.textAndIconContentTertiary,
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    left: 0,
    top: 0,
  },
  card1Child: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: Color.primary50,
    borderColor: Color.baseColorPrimaryColor,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    width: "100%",
  },
  hp: {
    left: "50.65%",
  },
  maxPower: {
    left: "14.29%",
  },
  maxPowerIcon: {
    height: "32%",
    width: "31.17%",
    top: "14.67%",
    right: "33.77%",
    bottom: "53.33%",
    left: "35.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hp1: {
    left: "16.88%",
    display: "none",
  },
  maxPower1: {
    left: "12.99%",
  },
  card11: {
    marginLeft: 18,
  },
  hp2: {
    left: "32.47%",
    display: "none",
  },
  hp3: {
    left: "33.77%",
    display: "none",
  },
  card1Parent: {
    top: 41,
    left: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
  },
  specifications: {
    height: 116,
    marginTop: 46,
    width: 362,
  },
  model: {
    left: "4.14%",
    top: "29.55%",
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    color: Color.textAndIconContentTertiary,
    textAlign: "left",
  },
  gt5000: {
    left: "79.28%",
    top: "29.55%",
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    color: Color.textAndIconContentTertiary,
    textAlign: "right",
  },
  gt50001: {
    left: "82.04%",
    top: "29.55%",
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    color: Color.textAndIconContentTertiary,
    textAlign: "right",
  },
  card3: {
    marginTop: 8,
  },
  gt50002: {
    left: "87.02%",
    top: "29.55%",
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    color: Color.textAndIconContentTertiary,
    textAlign: "right",
  },
  gt50003: {
    left: "80.11%",
    top: "29.55%",
    lineHeight: 19,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    color: Color.textAndIconContentTertiary,
    textAlign: "right",
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
    marginTop: 129,
  },
  frameGroup: {
    marginTop: 46,
    alignItems: "center",
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
  emilyGrace: {
    top: 124,
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    fontWeight: "600",
    fontFamily: FontFamily.titleMdTMdSemibold,
    zIndex: 2,
    left: 15,
  },
  reviews: {
    top: 163,
    left: 45,
    color: Color.baseColorInfoColor,
    zIndex: 3,
    textAlign: "left",
  },
  helperProfileChild: {
    top: 161,
    borderRadius: 1,
    width: 22,
    height: 22,
    zIndex: 4,
    left: 15,
    position: "absolute",
  },
  rightArrowIcon: {
    left: 346,
    zIndex: 5,
  },
  leftArrowIcon: {
    left: 23,
    zIndex: 6,
  },
  helperInfo: {
    top: 544,
    zIndex: 7,
    left: 15,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    color: Color.textAndIconContentTertiary,
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
  },
  createAnAccount: {
    color: Color.primary700,
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctasecondary: {
    borderColor: Color.primary700,
    zIndex: 8,
    left: 15,
    borderWidth: 1,
    borderStyle: "solid",
  },
  createAnAccount1: {
    color: Color.shadesWhite,
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimary: {
    left: 205,
    backgroundColor: Color.primary700,
    zIndex: 9,
  },
  helperProfile: {
    backgroundColor: Color.shadesWhite,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default HelperProfile;
