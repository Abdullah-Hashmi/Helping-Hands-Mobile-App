import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate("Home")} style={styles.text}>
        Details Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "blue", // Customize text color if needed
  },
});

export default DetailsScreen;
