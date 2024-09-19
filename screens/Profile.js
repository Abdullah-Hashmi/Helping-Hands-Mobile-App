import React, { useState, useCallback } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import MenuScreen from "../components/MenuScreen";
import { FontFamily, Border, Color, FontSize, Padding } from "../GlobalStyles";

const Profile = () => {
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [inputItems, setInputItems] = useState([
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ]);
  const [hamburgerMenuIconVisible, setHamburgerMenuIconVisible] =
    useState(false);

  const openHamburgerMenuIcon = useCallback(() => {
    setHamburgerMenuIconVisible(true);
  }, []);

  const closeHamburgerMenuIcon = useCallback(() => {
    setHamburgerMenuIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.profile, styles.parentFlexBox]}>
        <View style={styles.statusBarParent}>
          <View style={styles.statusBar}>
            <StatusBar barStyle="default" />
            <View style={styles.leftTitleRight}>
              <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
                <Image
                  style={[styles.angleLeftIcon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/angleleft2.png")}
                />
                <Text style={styles.leftTitle}>Back</Text>
              </View>
              <View style={[styles.title, styles.parentFlexBox]}>
                <Text style={[styles.title1, styles.title1Typo]}>Profile</Text>
              </View>
              <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
                <Text style={styles.rightTitle}>Right Title</Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-482.png")}
          />
          <Text style={[styles.emilyGrace, styles.nameTypo]}>Emily Grace</Text>
        </View>
        <View style={[styles.inputParent, styles.parentFlexBox]}>
          <View style={styles.inputLayout}>
            <View style={[styles.inputChild, styles.inputChildBorder]} />
            <Text style={[styles.name, styles.nameTypo]}>nate@email.con</Text>
          </View>
          <View style={[styles.input1, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputChildBorder]} />
            <Text style={[styles.text, styles.textPosition]}>+880</Text>
            <Text style={[styles.yourMobileNumber, styles.yourTypo]}>
              Your mobile number
            </Text>
            <Image
              style={[styles.inputInner, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/group-131.png")}
            />
            <View style={styles.lineView} />
            <Image
              style={[styles.downArrowIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/down-arrow1.png")}
            />
          </View>
          <View style={[styles.input1, styles.inputLayout]}>
            <DropDownPicker
              open={inputOpen}
              setOpen={setInputOpen}
              value={inputValue}
              setValue={setInputValue}
              placeholder="Gender"
              items={inputItems}
              labelStyle={styles.inputValue}
            />
          </View>
          <View style={[styles.input1, styles.inputLayout]}>
            <View style={[styles.inputChild, styles.inputChildBorder]} />
            <Text style={[styles.name, styles.nameTypo]}>Address</Text>
          </View>
          <View style={[styles.ctasecondary, styles.inputChildBorder]}>
            <Text style={[styles.createAnAccount, styles.title1Typo]}>
              Logout
            </Text>
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.homeIndicatorLayout]}>
          <View style={styles.homeIndicator1} />
        </View>
        <Pressable
          style={[styles.hamburgerMenu, styles.homeIndicatorLayout]}
          onPress={openHamburgerMenuIcon}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/hamburger-menu1.png")}
          />
        </Pressable>
        <Image
          style={styles.editImageIcon}
          contentFit="cover"
          source={require("../assets/edit-image.png")}
        />
        <Text style={[styles.yourMobileNumber1, styles.yourTypo]}>
          Your mobile number
        </Text>
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={hamburgerMenuIconVisible}
      >
        <View style={styles.hamburgerMenuIconOverlay}>
          <Pressable
            style={styles.hamburgerMenuIconBg}
            onPress={closeHamburgerMenuIcon}
          />
          <MenuScreen onClose={closeHamburgerMenuIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  inputValue: {
    color: "#5a5a5a",
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  accessoryFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  nameTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  inputChildBorder: {
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
  },
  inputLayout: {
    height: 60,
    width: 362,
  },
  textPosition: {
    top: "35%",
    display: "none",
  },
  yourTypo: {
    color: Color.neutralGray200,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  offerLayout: {
    width: 40,
    display: "none",
  },
  homePosition: {
    top: 81,
    height: 42,
    position: "absolute",
  },
  home1Typo: {
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  homeIndicatorLayout: {
    height: 34,
    position: "absolute",
  },
  angleLeftIcon: {
    display: "none",
  },
  leftTitle: {
    marginLeft: 5,
    textAlign: "left",
    color: Color.textColorContentSecondary,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "none",
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
  },
  title: {
    width: 191,
    flexDirection: "row",
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
    flexDirection: "row",
    height: 42,
    left: "50%",
    position: "absolute",
    width: 393,
    justifyContent: "center",
    alignItems: "center",
  },
  statusBar: {
    height: 94,
    width: 393,
  },
  frameChild: {
    width: 150,
    height: 150,
    marginTop: 21,
  },
  emilyGrace: {
    fontSize: FontSize.titleLgTLgMedium_size,
    lineHeight: 34,
    color: Color.textAndIconContentTertiary,
    marginTop: 21,
  },
  statusBarParent: {
    zIndex: 0,
    alignItems: "center",
  },
  inputChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderColor: Color.baseColorInfoColor,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  name: {
    top: "31.67%",
    left: "5.52%",
    color: Color.textColorContentSecondary,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    position: "absolute",
  },
  text: {
    left: "25.69%",
    lineHeight: 24,
    color: Color.titleText,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.subheadLgSHLgMedium_size,
    top: "35%",
    position: "absolute",
  },
  yourMobileNumber: {
    left: "38.67%",
    top: "35%",
    display: "none",
  },
  inputInner: {
    height: "30.17%",
    width: "6.91%",
    right: "89.78%",
    bottom: "34.83%",
    left: "3.31%",
    top: "35%",
    display: "none",
  },
  lineView: {
    height: "75%",
    width: "0.28%",
    top: "12.5%",
    right: "78.31%",
    bottom: "12.5%",
    left: "21.41%",
    borderColor: Color.colorGainsboro_100,
    borderRightWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  downArrowIcon: {
    height: "40%",
    width: "6.63%",
    top: "26.67%",
    right: "80.39%",
    bottom: "33.33%",
    left: "12.98%",
    display: "none",
  },
  input1: {
    marginTop: 20,
  },
  createAnAccount: {
    color: Color.primary700,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctasecondary: {
    borderColor: Color.primary700,
    width: 340,
    height: 39,
    paddingHorizontal: Padding.p_74xl_5,
    paddingVertical: Padding.p_base_5,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputParent: {
    marginTop: 20,
    zIndex: 1,
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.lightThemeTextHeading,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  homeIndicator: {
    top: 818,
    zIndex: 3,
    display: "none",
    left: 0,
    width: 393,
  },
  hamburgerMenuIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  hamburgerMenuIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  hamburgerMenu: {
    left: 15,
    top: 60,
    width: 34,
    zIndex: 4,
  },
  editImageIcon: {
    top: 233,
    left: 235,
    width: 20,
    height: 20,
    zIndex: 5,
    position: "absolute",
  },
  yourMobileNumber1: {
    top: "51.41%",
    left: "9.92%",
    zIndex: 6,
  },
  profile: {
    backgroundColor: Color.shadesWhite,
    height: 852,
    overflow: "hidden",
    width: "100%",
    justifyContent: "center",
    flex: 1,
  },
});

export default Profile;
