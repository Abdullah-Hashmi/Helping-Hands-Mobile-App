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

const History1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.history, style]}
      onPress={() => navigation.navigate("MenuScreen")}
    >
      <Image
        style={styles.historyIcon}
        contentFit="cover"
        source={require("../assets/history1.png")}
      />
      <Text style={styles.history1}>History</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  historyIcon: {
    width: 16,
    height: 16,
  },
  history1: {
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.textColorContentSecondary,
    textAlign: "left",
    marginLeft: 8,
  },
  history: {
    flexDirection: "row",
  },
});

export default History1;
