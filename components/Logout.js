import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Logout = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.logout, style]}
      onPress={() => navigation.navigate("SignIn")}
    >
      <Image
        style={styles.logoutIcon}
        contentFit="cover"
        source={require("../assets/logout.png")}
      />
      <Pressable
        style={styles.logout1}
        onPress={() => navigation.navigate("DrawerRoot", { screen: "SignIn" })}
      >
        <Text style={styles.logout2}>Logout</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logoutIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  logout2: {
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.textColorContentSecondary,
    textAlign: "left",
  },
  logout1: {
    marginLeft: 8,
  },
  logout: {
    position: "absolute",
    top: 486,
    left: 19,
    flexDirection: "row",
  },
});

export default Logout;
