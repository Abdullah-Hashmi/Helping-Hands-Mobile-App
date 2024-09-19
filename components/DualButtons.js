import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const DualButtons = ({
  onPressButton1,
  onPressButton2,
  textButton1,
  textButton2,
  backgroundColorButton1,
  backgroundColorButton2,
  textColorButton1,
  textColorButton2,
  borderStyleButton1,
  borderStyleButton2,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: backgroundColorButton1 || "green" },
          borderStyleButton1 ? { borderColor: borderStyleButton1 } : {},
        ]}
        onPress={onPressButton1}
      >
        <Text
          style={[styles.buttonText, { color: textColorButton1 || "white" }]}
        >
          {textButton1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: backgroundColorButton2 || "gray" },
          borderStyleButton2 ? { borderColor: borderStyleButton2 } : {},
        ]}
        onPress={onPressButton2}
      >
        <Text
          style={[styles.buttonText, { color: textColorButton2 || "white" }]}
        >
          {textButton2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 2, // Default border size for buttons
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DualButtons;
