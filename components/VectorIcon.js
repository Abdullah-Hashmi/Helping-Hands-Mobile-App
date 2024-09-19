import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const VectorIcon = ({ style }) => {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      contentFit="cover"
      source={require("../assets/vector8.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    width: 28,
    height: 34,
  },
});

export default VectorIcon;
