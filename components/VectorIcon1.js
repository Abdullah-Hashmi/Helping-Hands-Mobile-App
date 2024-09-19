import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet } from "react-native";
import { Image } from "expo-image";

const VectorIcon1 = ({ style }) => {
  return (
    <Image
      style={[styles.vectorIcon, style]}
      contentFit="cover"
      source={require("../assets/vector5.png")}
    />
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    width: 24,
    height: 21,
  },
});

export default VectorIcon1;
