import * as React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Pressable,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color, Padding } from "../GlobalStyles";

const Complain = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.complain}>
      <View style={[styles.homeIndicator, styles.homeLayout]}>
        <View style={[styles.homeIndicator1, styles.homeIndicator1Position]} />
      </View>
      <View style={styles.frameParent}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar barStyle="default" />
            <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
              <Pressable
                style={[styles.leftAccessory, styles.accessoryFlexBox]}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.angleLeftIcon}
                  contentFit="cover"
                  source={require("../assets/angleleft.png")}
                />
                <Text style={[styles.leftTitle, styles.titleLayout]}>Back</Text>
              </Pressable>
              <View style={[styles.title, styles.titleFlexBox]}>
                <Text style={[styles.title1, styles.title1Typo]}>Complain</Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={[styles.rightTitle, styles.titleLayout]}>
                  Right Title
                </Text>
              </View>
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Write your complain here (minimum 10 characters)"
            placeholderTextColor="#d0d0d0"
          />
          <TouchableHighlight
            style={[styles.ctaprimary, styles.titleFlexBox]}
            underlayColor="#fff"
            activeOpacity={0.2}
            onPress={() => navigation.navigate("ComplainScuessful")}
          >
            <Text style={[styles.createAnAccount, styles.title1Typo]}>
              Submit
            </Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.homeIndicator2, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.homeIndicator1Position]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeLayout: {
    height: 34,
    width: 393,
  },
  homeIndicator1Position: {
    left: "50%",
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
  titleLayout: {
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
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
    display: "none",
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
    color: Color.textColorContentPrimary,
    flex: 1,
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  title: {
    width: 191,
  },
  rightTitle: {
    color: Color.defaultSystemBlueLight,
    textAlign: "right",
    fontFamily: FontFamily.subheadLgSHLgRegular,
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
  input: {
    width: 362,
    height: 118,
    fontSize: FontSize.subheadSmSHSmMedium_size,
    marginTop: 69,
    fontFamily: FontFamily.subheadLgSHLgRegular,
  },
  createAnAccount: {
    color: Color.shadesWhite,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimary: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 340,
    height: 54,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    marginTop: 69,
  },
  statusBarParent: {
    alignItems: "center",
  },
  homeIndicator2: {
    marginTop: 414,
  },
  frameParent: {
    marginTop: 414,
    alignItems: "center",
  },
  complain: {
    backgroundColor: Color.shadesWhite,
    width: "100%",
    height: 852,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
    flex: 1,
  },
});

export default Complain;
