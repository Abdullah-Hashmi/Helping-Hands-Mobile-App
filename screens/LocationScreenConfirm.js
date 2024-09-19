import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
  Modal,
} from "react-native";
import MenuScreen from "../components/MenuScreen";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const LocationScreenConfirm = () => {
  const [hamburgerMenuIcon1Visible, setHamburgerMenuIcon1Visible] =
    useState(false);
  const navigation = useNavigation();

  const openHamburgerMenuIcon1 = useCallback(() => {
    setHamburgerMenuIcon1Visible(true);
  }, []);

  const closeHamburgerMenuIcon1 = useCallback(() => {
    setHamburgerMenuIcon1Visible(false);
  }, []);

  return (
    <>
      <View style={[styles.locationScreenConfirm, styles.titleFlexBox]}>
        <Image
          style={styles.mapIcon}
          contentFit="cover"
          source={require("../assets/map5.png")}
        />
        <View style={[styles.statusBar, styles.iconPosition]}>
          <View style={styles.topStatusBar}>
            <Image
              style={[styles.notchIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/notch.png")}
            />
            <View style={styles.rightSide}>
              <Image
                style={styles.batteryIcon}
                contentFit="cover"
                source={require("../assets/battery.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi.png")}
              />
              <Image
                style={styles.mobileSignalIcon}
                contentFit="cover"
                source={require("../assets/mobile-signal.png")}
              />
              <Image
                style={styles.recordingIndicatorIcon}
                contentFit="cover"
                source={require("../assets/recording-indicator2.png")}
              />
            </View>
            <Image
              style={styles.leftSideIcon}
              contentFit="cover"
              source={require("../assets/left-side.png")}
            />
          </View>
          <View style={[styles.leftTitleRight, styles.leftTitleRightPosition]}>
            <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
              <Image
                style={[styles.hamburgerMenuIcon, styles.crossLayout]}
                contentFit="cover"
                source={require("../assets/hamburger-menu.png")}
              />
              <Text style={[styles.leftTitle, styles.titleTypo]}>Back</Text>
            </View>
            <View style={[styles.title, styles.titleFlexBox]}>
              <Text style={[styles.title1, styles.title1Typo]}>Title</Text>
            </View>
            <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
              <Text style={[styles.rightTitle, styles.titleTypo]}>Skip</Text>
            </View>
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
        <TouchableOpacity
          style={[styles.hamburgerMenu, styles.notificationLayout]}
          activeOpacity={0.2}
          onPress={openHamburgerMenuIcon1}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/hamburger-menu1.png")}
          />
        </TouchableOpacity>
        <Pressable
          style={[styles.notification, styles.notificationLayout]}
          onPress={() => navigation.navigate("NotificationScreen")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/notification.png")}
          />
        </Pressable>
        <View
          style={[
            styles.locationScreenConfirmChild,
            styles.homeIndicator2Position,
          ]}
        />
        <View style={[styles.homeIndicator2, styles.homeIndicator2Position]}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
        <Pressable
          style={[styles.cross, styles.crossLayout]}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
          }
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/cross.png")}
          />
        </Pressable>
        <Text style={[styles.yourHelperIs, styles.emilyGrace1Typo]}>
          Your helper is coming in 3:35
        </Text>
        <View
          style={[styles.locationScreenConfirmItem, styles.locationLayout]}
        />
        <View
          style={[styles.locationScreenConfirmInner, styles.locationLayout]}
        />
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line.png")}
        />
        <Image
          style={styles.trackIcon}
          contentFit="cover"
          source={require("../assets/track.png")}
        />
        <Image
          style={styles.trackIcon1}
          contentFit="cover"
          source={require("../assets/track1.png")}
        />
        <View style={styles.reviewsParent}>
          <Text style={[styles.reviews, styles.reviewsTypo]}>
            4.9 (531 reviews)
          </Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
          <Pressable
            style={styles.emilyGrace}
            onPress={() => navigation.navigate("HelperProfile")}
          >
            <Text style={[styles.emilyGrace1, styles.emilyGrace1Typo]}>
              Emily Grace
            </Text>
          </Pressable>
          <Text style={[styles.m5minsAway, styles.reviewsTypo]}>
            800m (5mins away)
          </Text>
          <Image
            style={[styles.mapIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/map6.png")}
          />
        </View>
        <TouchableHighlight
          style={[styles.ctaprimary, styles.titleFlexBox]}
          underlayColor="#fff"
          activeOpacity={0.2}
          onPress={() => navigation.navigate("ChatScreen")}
        >
          <Text style={[styles.createAnAccount, styles.title1Typo]}>
            Message
          </Text>
        </TouchableHighlight>
        <View style={[styles.homeIndicator4, styles.homeLayout]}>
          <View
            style={[styles.homeIndicator1, styles.leftTitleRightPosition]}
          />
        </View>
        <ImageBackground
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse4811.png")}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={hamburgerMenuIcon1Visible}
      >
        <View style={styles.hamburgerMenuIcon1Overlay}>
          <Pressable
            style={styles.hamburgerMenuIcon1Bg}
            onPress={closeHamburgerMenuIcon1}
          />
          <MenuScreen onClose={closeHamburgerMenuIcon1} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconPosition: {
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
  crossLayout: {
    height: 24,
    width: 24,
  },
  titleTypo: {
    color: Color.textColorContentSecondary,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
    display: "none",
  },
  title1Typo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  homeLayout: {
    height: 34,
    width: 393,
  },
  notificationLayout: {
    width: 34,
    top: 60,
    height: 34,
    position: "absolute",
  },
  homeIndicator2Position: {
    top: 407,
    position: "absolute",
  },
  emilyGrace1Typo: {
    color: Color.textAndIconContentTertiary,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  locationLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 1,
    width: 393,
    position: "absolute",
  },
  reviewsTypo: {
    color: Color.neutralGray400,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.subheadLgSHLgRegular,
    position: "absolute",
  },
  mapIcon: {
    width: 414,
    height: 896,
    zIndex: 0,
    opacity: 0.4,
  },
  notchIcon: {
    width: 0,
    height: 0,
    top: 0,
  },
  batteryIcon: {
    width: 24,
    height: 11,
    right: 0,
    top: 0,
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
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  hamburgerMenuIcon: {
    display: "none",
  },
  leftTitle: {
    marginLeft: 5,
    textAlign: "left",
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
    zIndex: 1,
    width: 393,
    top: 0,
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
    zIndex: 2,
    top: 818,
    height: 34,
    left: 0,
    position: "absolute",
    display: "none",
  },
  hamburgerMenuIcon1Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  hamburgerMenuIcon1Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  hamburgerMenu: {
    zIndex: 3,
    left: 15,
  },
  notification: {
    left: 344,
    zIndex: 4,
  },
  locationScreenConfirmChild: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    width: 361,
    height: 408,
    zIndex: 5,
    left: 15,
    backgroundColor: Color.shadesWhite,
  },
  homeIndicator2: {
    left: -2,
    zIndex: 6,
    height: 34,
    width: 393,
    opacity: 0.4,
  },
  cross: {
    left: 359,
    top: 416,
    zIndex: 7,
    position: "absolute",
  },
  yourHelperIs: {
    top: 465,
    left: 13,
    zIndex: 8,
    textAlign: "center",
    position: "absolute",
  },
  locationScreenConfirmItem: {
    top: 503,
    zIndex: 9,
  },
  locationScreenConfirmInner: {
    top: 597,
    zIndex: 10,
  },
  lineIcon: {
    top: 181,
    left: 162,
    borderRadius: 37,
    width: 80,
    height: 206,
    zIndex: 11,
    position: "absolute",
  },
  trackIcon: {
    width: 27,
    zIndex: 12,
    height: 36,
  },
  trackIcon1: {
    width: 28,
    zIndex: 13,
    height: 36,
  },
  reviews: {
    top: 46,
    left: 16,
  },
  vectorIcon: {
    height: "13.11%",
    width: "7.18%",
    top: "81.97%",
    right: "89.4%",
    bottom: "4.92%",
    left: "3.42%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  emilyGrace1: {
    textAlign: "left",
  },
  emilyGrace: {
    left: 4,
    top: 0,
    position: "absolute",
  },
  m5minsAway: {
    top: 23,
    lineHeight: 20,
    left: 15,
  },
  mapIcon1: {
    top: 25,
    width: 16,
    height: 16,
  },
  reviewsParent: {
    top: 519,
    left: 74,
    width: 117,
    height: 61,
    zIndex: 14,
    position: "absolute",
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
    top: 732,
    left: 97,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.primary700,
    width: 209,
    height: 54,
    paddingHorizontal: 50,
    paddingVertical: Padding.p_base_5,
    zIndex: 15,
    position: "absolute",
  },
  homeIndicator4: {
    zIndex: 16,
    top: 818,
    height: 34,
    left: 0,
    position: "absolute",
  },
  ellipseIcon: {
    top: 522,
    left: 29,
    width: 44,
    height: 44,
    zIndex: 17,
    position: "absolute",
  },
  locationScreenConfirm: {
    height: 852,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.shadesWhite,
  },
});

export default LocationScreenConfirm;
