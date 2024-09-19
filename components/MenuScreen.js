import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Linking,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const MenuScreen = ({ onClose }) => {
  return (
    <View style={styles.menuScreen}>
      <Image
        style={styles.mapIcon}
        contentFit="cover"
        source={require("../assets/map3.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={styles.topStatusBar}>
          <Image
            style={[styles.notchIcon, styles.statusBarPosition]}
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
            style={[styles.leftSideIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/left-side.png")}
          />
        </View>
        <View style={[styles.leftTitleRight, styles.titleFlexBox]}>
          <View style={[styles.leftAccessory, styles.accessoryFlexBox]}>
            <Image
              style={[styles.hamburgerMenuIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/hamburger-menu.png")}
            />
            <Text style={[styles.leftTitle, styles.backTypo]}>Back</Text>
          </View>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Text style={[styles.title1, styles.title1Typo]}>Title</Text>
          </View>
          <View style={[styles.rightAccessory, styles.accessoryFlexBox]}>
            <Text style={styles.rightTitle}>Skip</Text>
          </View>
        </View>
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={styles.hamburgerMenuIcon1}
        contentFit="cover"
        source={require("../assets/hamburger-menu1.png")}
      />
      <View style={[styles.menu, styles.menuLayout1]}>
        <Image
          style={[styles.vectorIcon, styles.menuLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Image
          style={styles.walletIcon}
          contentFit="cover"
          source={require("../assets/wallet.png")}
        />
        <View style={[styles.home, styles.homePosition]}>
          <Image
            style={[styles.houseFillIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/house-fill.png")}
          />
          <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
        </View>
        <View style={[styles.offer, styles.homePosition1]}>
          <Image
            style={[styles.discountIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/discount2.png")}
          />
          <Text style={[styles.offer1, styles.home1Typo]}>Offer</Text>
        </View>
        <Text style={[styles.wallet, styles.home1Typo]}>Wallet</Text>
        <View style={[styles.favourite, styles.homePosition1]}>
          <Image
            style={[styles.heartIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/heart.png")}
          />
          <Text style={[styles.offer1, styles.home1Typo]}>Favourite</Text>
        </View>
        <View style={[styles.profile, styles.homePosition1]}>
          <Image
            style={[styles.userIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/user1.png")}
          />
          <Text style={[styles.offer1, styles.home1Typo]}>Profile</Text>
        </View>
      </View>
      <Image
        style={[styles.notificationIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/notification.png")}
      />
      <Image
        style={[styles.locationTarhgetIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/location-tarhget1.png")}
      />
      <Image
        style={styles.placeIndicateIcon}
        contentFit="cover"
        source={require("../assets/place-indicate.png")}
      />
      <View style={[styles.ctaprimary, styles.ctaprimaryBg]}>
        <Text style={[styles.createAnAccount, styles.title1Typo]}>Rental</Text>
      </View>
      <View style={[styles.menuScreenChild, styles.ctaprimaryBg]} />
      <View style={styles.menuScreenItem} />
      <View style={[styles.sideMenu, styles.sidePosition]}>
        <View style={[styles.rectangle, styles.sidePosition]} />
        <Image
          style={[styles.sideMenuChild, styles.menuLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Text style={[styles.nateSamson, styles.natePosition]}>
          Emily Grace
        </Text>
        <Text style={[styles.nateemailcon, styles.logoutPosition]}>
          @email.con
        </Text>
        <View style={[styles.sideMenuItem, styles.sideChildLayout]} />
        <View style={[styles.sideMenuInner, styles.sideChildLayout]} />
        <View style={[styles.lineView, styles.sideChildLayout]} />
        <View style={[styles.sideMenuChild1, styles.sideChildLayout]} />
        <View style={[styles.sideMenuChild2, styles.sideChildLayout]} />
        <View style={[styles.sideMenuChild3, styles.sideChildLayout]} />
        <Image
          style={[styles.leftArrowIcon, styles.logoutPosition]}
          contentFit="cover"
          source={require("../assets/left-arrow.png")}
        />
        <View style={[styles.history, styles.logoutPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/history1.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>History</Text>
        </View>
        <View style={[styles.complain, styles.logoutPosition]}>
          <Pressable
            style={styles.iconLayout}
            onPress={() =>
              navigation.navigate("DrawerRoot", { screen: "Complain" })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/complain1.png")}
            />
          </Pressable>
          <Text style={[styles.history1, styles.logout6Typo]}>Complain</Text>
        </View>
        <View style={[styles.referral, styles.referralPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/referral1.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>About us</Text>
        </View>
        <View style={[styles.aboutUs, styles.logoutPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/about-us1.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>About Us</Text>
        </View>
        <View style={[styles.settings, styles.settingsPosition]}>
          <Image
            style={[styles.settingsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/settings2.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>Settings</Text>
        </View>
        <View style={[styles.helpAndSupport, styles.logoutPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/help-and-support1.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>
            Help and Support
          </Text>
        </View>
        <View style={[styles.logout, styles.logoutPosition]}>
          <Image
            style={[styles.settingsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/logout.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>Logout</Text>
        </View>
        <Pressable
          style={styles.leftTitle1}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backTypo}>Back</Text>
        </Pressable>
      </View>
      <View style={[styles.sideMenu1, styles.sidePosition]}>
        <View style={[styles.rectangle, styles.sidePosition]} />
        <Image
          style={[styles.sideMenuChild, styles.menuLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-43.png")}
        />
        <Pressable
          style={styles.natePosition}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.nateSamsonTypo}>Emily Grace</Text>
        </Pressable>
        <Text style={[styles.nateemailcon, styles.logoutPosition]}>
          @email.con
        </Text>
        <View style={[styles.sideMenuItem, styles.sideChildLayout]} />
        <View style={[styles.sideMenuInner, styles.sideChildLayout]} />
        <View style={[styles.lineView, styles.sideChildLayout]} />
        <View style={[styles.sideMenuChild1, styles.sideChildLayout]} />
        <View style={[styles.sideMenuChild2, styles.sideChildLayout]} />
        <View style={[styles.sideMenuChild3, styles.sideChildLayout]} />
        <Image
          style={[styles.leftArrowIcon, styles.logoutPosition]}
          contentFit="cover"
          source={require("../assets/left-arrow.png")}
        />
        {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
        {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
        <View style={[styles.referral, styles.referralPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/referral1.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>About us</Text>
        </View>
        <View style={[styles.aboutUs, styles.logoutPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/about-us1.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>About Us</Text>
        </View>
        <View style={[styles.settings, styles.settingsPosition]}>
          <Image
            style={[styles.settingsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/settings2.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>Settings</Text>
        </View>
        <View style={[styles.helpAndSupport, styles.logoutPosition]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/help-and-support1.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>
            Help and Support
          </Text>
        </View>
        <View style={[styles.logout, styles.logoutPosition]}>
          <Image
            style={[styles.settingsIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/logout.png")}
          />
          <Text style={[styles.history1, styles.logout6Typo]}>Logout</Text>
        </View>
        <Pressable
          style={styles.leftTitle1}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backTypo}>Back</Text>
        </Pressable>
      </View>
      {stateIndex === 4 ? drawerItemsActive[4] : drawerItemsNormal[4]}
      {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
      {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
      <Pressable
        style={[styles.aboutUs4, styles.aboutUs4Position]}
        onPress={() => navigation.navigate("AboutUsScreen")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/about-us1.png")}
        />
        <Text style={[styles.history1, styles.logout6Typo]}>About Us</Text>
      </Pressable>
      <Text style={[styles.aboutUs6, styles.logout6Typo]}>About Us</Text>
      <ImageBackground
        style={[styles.menuScreenInner, styles.aboutUs4Position]}
        resizeMode="cover"
        source={require("../assets/ellipse481.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBarPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition1: {
    left: 3,
    position: "absolute",
  },
  titleFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  accessoryFlexBox: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  backTypo: {
    textAlign: "left",
    color: Color.textColorContentSecondary,
    fontFamily: FontFamily.subheadLgSHLgRegular,
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  title1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  menuLayout1: {
    height: 140,
    left: 0,
    position: "absolute",
    width: 393,
  },
  homePosition: {
    left: 20,
    position: "absolute",
  },
  home1Typo: {
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  homePosition1: {
    top: 81,
    height: 42,
  },
  iconPosition: {
    left: 344,
    width: 34,
    height: 34,
    position: "absolute",
  },
  ctaprimaryBg: {
    backgroundColor: Color.primary700,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  sidePosition: {
    height: 853,
    width: 249,
    left: 0,
    top: 0,
    position: "absolute",
  },
  menuLayout: {
    height: 70,
    width: 70,
  },
  natePosition: {
    left: "6.83%",
    top: "19.7%",
    position: "absolute",
  },
  logoutPosition: {
    left: 17,
    position: "absolute",
  },
  sideChildLayout: {
    height: 1,
    width: 250,
    borderTopWidth: 1,
    borderColor: Color.borderDividerDivider,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  logout6Typo: {
    lineHeight: 16,
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  referralPosition: {
    top: 347,
    flexDirection: "row",
  },
  settingsPosition: {
    top: 443,
    left: 17,
    position: "absolute",
    flexDirection: "row",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  aboutUs4Position: {
    left: 18,
    position: "absolute",
  },
  mapIcon: {
    width: 414,
    height: 896,
    opacity: 0.4,
    zIndex: 0,
  },
  notchIcon: {
    width: 0,
    height: 0,
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
    width: 54,
    height: 21,
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
    display: "none",
  },
  leftAccessory: {
    padding: Padding.p_5xs,
  },
  title1: {
    color: Color.labelColorLightPrimary,
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    textAlign: "center",
    flex: 1,
  },
  title: {
    width: 191,
    display: "none",
  },
  rightTitle: {
    textAlign: "right",
    color: Color.textColorContentSecondary,
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
    justifyContent: "center",
    left: "50%",
    position: "absolute",
    width: 393,
  },
  statusBar: {
    height: 94,
    zIndex: 1,
    width: 393,
    left: 0,
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
    zIndex: 2,
    height: 34,
    left: 0,
    position: "absolute",
    width: 393,
  },
  hamburgerMenuIcon1: {
    zIndex: 3,
    width: 34,
    left: 15,
    top: 60,
    height: 34,
    position: "absolute",
  },
  vectorIcon: {
    top: 0,
  },
  walletIcon: {
    top: 28,
    left: 176,
    width: 40,
    height: 40,
    position: "absolute",
  },
  houseFillIcon: {
    left: 6,
    top: 0,
    position: "absolute",
  },
  home1: {
    color: Color.baseColorPrimaryColor,
    top: 24,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    left: 0,
    position: "absolute",
  },
  home: {
    width: 36,
    top: 81,
    height: 42,
  },
  discountIcon: {
    left: 3,
    position: "absolute",
    top: 0,
  },
  offer1: {
    top: 24,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    left: 0,
    position: "absolute",
    color: Color.textColorContentSecondary,
  },
  offer: {
    left: 270,
    width: 30,
    position: "absolute",
  },
  wallet: {
    top: 105,
    left: 177,
    color: Color.textColorContentSecondary,
    position: "absolute",
  },
  heartIcon: {
    left: 16,
    top: 0,
    position: "absolute",
  },
  favourite: {
    left: 81,
    width: 57,
    position: "absolute",
  },
  userIcon: {
    left: 7,
    top: 0,
    position: "absolute",
  },
  profile: {
    left: 335,
    width: 38,
    position: "absolute",
  },
  menu: {
    top: 712,
    zIndex: 4,
  },
  notificationIcon: {
    zIndex: 5,
    top: 60,
    left: 344,
  },
  locationTarhgetIcon: {
    top: 497,
    zIndex: 6,
  },
  placeIndicateIcon: {
    top: 207,
    left: 84,
    width: 224,
    height: 224,
    zIndex: 7,
    position: "absolute",
  },
  createAnAccount: {
    color: Color.shadesWhite,
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.subheadLgSHLgMedium_size,
  },
  ctaprimary: {
    top: 487,
    height: 54,
    paddingHorizontal: 60,
    paddingVertical: Padding.p_base_5,
    zIndex: 8,
    left: 15,
    backgroundColor: Color.primary700,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  menuScreenChild: {
    top: 638,
    left: 28,
    width: 168,
    height: 48,
    zIndex: 9,
  },
  menuScreenItem: {
    left: -6,
    backgroundColor: "rgba(38, 38, 38, 0.16)",
    width: 404,
    zIndex: 10,
    top: 0,
    position: "absolute",
    height: 852,
  },
  rectangle: {
    borderTopRightRadius: Border.br_61xl,
    borderBottomRightRadius: Border.br_61xl,
    backgroundColor: Color.shadesWhite,
    height: 853,
    width: 249,
  },
  sideMenuChild: {
    top: 80,
    left: 17,
    position: "absolute",
    display: "none",
  },
  nateSamson: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  nateemailcon: {
    top: 193,
    lineHeight: 18,
    fontSize: FontSize.captionCaptionMedium_size,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  sideMenuItem: {
    top: 283,
  },
  sideMenuInner: {
    top: 331,
  },
  lineView: {
    top: 379,
  },
  sideMenuChild1: {
    top: 427,
  },
  sideMenuChild2: {
    top: 475,
  },
  sideMenuChild3: {
    top: 523,
  },
  leftArrowIcon: {
    top: 29,
    height: 24,
    width: 24,
  },
  history1: {
    marginLeft: 8,
  },
  history: {
    top: 251,
    flexDirection: "row",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  complain: {
    top: 299,
    flexDirection: "row",
  },
  referral: {
    left: 17,
    position: "absolute",
    display: "none",
  },
  aboutUs: {
    top: 395,
    display: "none",
    flexDirection: "row",
  },
  settingsIcon: {
    overflow: "hidden",
    height: 16,
    width: 16,
  },
  settings: {
    display: "none",
  },
  helpAndSupport: {
    top: 491,
    display: "none",
    flexDirection: "row",
  },
  logout: {
    top: 539,
    display: "none",
    flexDirection: "row",
  },
  leftTitle1: {
    left: 45,
    top: 30,
    position: "absolute",
  },
  sideMenu: {
    zIndex: 11,
  },
  nateSamsonTypo: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.headlineSmHSmMedium_size,
    textAlign: "left",
    color: Color.textColorContentSecondary,
  },
  sideMenu1: {
    zIndex: 12,
  },
  aboutUs4: {
    zIndex: 16,
    top: 347,
    flexDirection: "row",
  },
  aboutUs6: {
    left: 24,
    zIndex: 17,
    top: 0,
    position: "absolute",
  },
  menuScreenInner: {
    top: 96,
    zIndex: 18,
    height: 70,
    width: 70,
  },
  menuScreen: {
    maxWidth: "100%",
    maxHeight: "100%",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    height: 852,
    width: 393,
    backgroundColor: Color.shadesWhite,
  },
});

export default MenuScreen;
