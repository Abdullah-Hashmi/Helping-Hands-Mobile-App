import * as React from "react";
import { View, Text } from "react-native";
import { useLayoutEffect } from "react"; // Remove the duplicate import statement for React

export default function ProfileScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert('This is the "Home" screen.')}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Profile Screen
      </Text>
    </View>
  );
}
