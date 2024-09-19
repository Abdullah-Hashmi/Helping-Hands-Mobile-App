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

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding, styles.textFlexBox]}>
      <View style={styles.statusBar}>
        <StatusBar barStyle="default" />
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
            <Text style={[styles.title1, styles.anywhereTypo]}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.undrawMyLocationReR52x1Icon}
        contentFit="cover"
        source={require("../assets/undraw-my-location-re-r52x-11.png")}
      />
      <View style={[styles.text, styles.textFlexBox]}>
        <Text style={[styles.anywhereYouAre, styles.anywhereTypo]}>
          Anywhere you are
        </Text>
        <Text style={[styles.connectInstantlyAnywhere, styles.anywhereTypo]}>
          Connect instantly, anywhere you are. Helping Hands brings assistance
          to your fingertips, allowing you to request or offer help seamlessly
          within your community.
        </Text>
      </View>
      <TouchableHighlight
        style={styles.wrapper}
        underlayColor="#fff"
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Onboarding1")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-296.png")}
        />
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
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  anywhereTypo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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
  undrawMyLocationReR52x1Icon: {
    width: 226,
    height: 200,
    marginTop: 75,
    overflow: "hidden",
  },
  anywhereYouAre: {
    fontSize: FontSize.titleMdTMdSemibold_size,
    lineHeight: 30,
    color: Color.textColorContentSecondary,
  },
  connectInstantlyAnywhere: {
    fontSize: FontSize.subheadSmSHSmMedium_size,
    lineHeight: 19,
    color: Color.neutralGray400,
    width: 280,
    marginTop: 12,
  },
  text: {
    marginTop: 75,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    width: 86,
    height: 86,
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

export default Onboarding2;
