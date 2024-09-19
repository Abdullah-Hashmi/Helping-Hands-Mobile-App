import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding, styles.textFlexBox]}>
      <View style={styles.statusBar}>
        <StatusBar style={styles.groupPosition} barStyle="default" />
        <TouchableOpacity
          style={[styles.leftTitleRight, styles.titleFlexBox]}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("EnableLocation")}
        >
          <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
            <Image
              style={styles.angleLeftIcon}
              contentFit="cover"
              source={require("../assets/angleleft2.png")}
            />
            <Text style={[styles.leftTitle, styles.titleTypo]}>Left Title</Text>
          </View>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.anytimeTypo]}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.undrawTimeManagementReTk5wIcon}
        contentFit="cover"
        source={require("../assets/undraw-time-management-re-tk5w-1.png")}
      />
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.atAnytime, styles.anytimeTypo]}>At anytime</Text>
        <Text style={[styles.anytimeYouNeed, styles.anytimeTypo]}>
          Anytime you need support, we're here. Helping Hands ensures you
          receive timely assistance or extend a helping hand to others whenever
          the need arises
        </Text>
      </View>
      <View style={[styles.ellipseParent, styles.groupLayout]}>
        <Image
          style={[styles.groupChild, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <TouchableHighlight
          style={styles.wrapper}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Onboarding3")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-5.png")}
          />
        </TouchableHighlight>
      </View>
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
  groupPosition: {
    left: 0,
    top: 0,
    position: "absolute",
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
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  anytimeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 86,
    width: 86,
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
    display: "none",
  },
  leftAccessory: {
    padding: Padding.p_5xs,
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
  },
  rightTitle: {
    textAlign: "right",
    color: Color.textColorContentSecondary,
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
  undrawTimeManagementReTk5wIcon: {
    width: 214,
    height: 200,
    marginTop: 75,
    overflow: "hidden",
  },
  atAnytime: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    color: Color.textColorContentSecondary,
  },
  anytimeYouNeed: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.neutralGray400,
    width: 280,
    marginTop: 12,
  },
  text: {
    marginTop: 75,
  },
  groupChild: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 8,
    top: 8,
    width: 70,
    height: 70,
    position: "absolute",
  },
  ellipseParent: {
    marginTop: 75,
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
    marginTop: 75,
    width: 393,
  },
  onboarding: {
    backgroundColor: Color.shadesWhite,
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Onboarding1;
