import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontFamily, FontSize, Padding, Border, Color } from "../GlobalStyles";

const SeekerCard = ({
  buttonText1,
  buttonText2,
  buttonColor1,
  buttonColor2,
  headingText,
  descriptionText,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{headingText}</Text>
      <Text style={styles.description}>{descriptionText}</Text>
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "white" }]} // Button 1 background color white
          >
            <Text style={[styles.buttonText, { color: "green" }]}>
              {" "}
              {/* Button 1 text color green */}
              {buttonText1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "green" }]} // Button 2 background color green
          >
            <Text style={[styles.buttonText, { color: "white" }]}>
              {" "}
              {/* Button 2 text color white */}
              {buttonText2}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderColor: "#00AA05", // Border color
    backgroundColor: "#DFEFEF", // Background color
    borderRadius: 30, // Border radius
    width: "96%", // Adjust the width here (e.g., 80% of the parent container)
    alignSelf: "center", // Center the component horizontally
    minHeight: 200, // Increase minimum height of the container
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
    fontFamily: FontFamily.subheadLgSHLgMedium,
    fontWeight: "500",
  },
  description: {
    fontFamily: FontFamily.subheadLgSHLgMedium,
    marginBottom: 20,
    color: "#5E5D59",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end", // Align content to the bottom
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around", // Center buttons horizontally
    minHeight: 50, // Increase minimum height of the buttons container
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15, // Increase padding vertically for buttons
    paddingHorizontal: 20,
    borderRadius: 30,
    minWidth: 145, // Increase minimum width of buttons
    borderWidth: 1, // Add border
    borderColor: "#00AA05",
  },
  buttonText: {
    alignItems: "center",
    justifyContent: "center", // Common text styles for buttons
  },
});

export default SeekerCard;
