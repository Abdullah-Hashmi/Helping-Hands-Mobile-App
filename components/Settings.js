import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Settings = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.settings, style]}
      onPress={() => navigation.navigate("SettingsScreen")}
    >
      <Image
        style={styles.settingsIcon}
        contentFit="cover"
        source={require("../assets/settings2.png")}
      />
      <Text style={styles.settings1}>Settings</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  settingsIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  settings1: {
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.textColorContentSecondary,
    textAlign: "left",
    marginLeft: 8,
  },
  settings: {
    position: "absolute",
    top: 397,
    left: 20,
    flexDirection: "row",
  },
});

export default Settings;
