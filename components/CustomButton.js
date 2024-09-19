import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgColor ? { color: fgColor } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  // container_PRIMARY: {
  //   backgroundColor: "#3871F3",
  // },
  // container_SECONDARY: {
  //   borderWidth: 2,
  //   borderColor: "#3871F3",
  // },
  container_TERTIARY: {
    backgroundColor: "lightgray",
  },

  text: {
    fontWeight: "bold",
    color: "white",
  },
  text_SECONDARY: {
    color: "#3871F3",
  },
  text_TERTIARY: {
    color: "gray",
  },
});

export default CustomButton;
