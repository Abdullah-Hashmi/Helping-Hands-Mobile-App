import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Onboarding = () => {
  return (
    <View style={styles.onboarding}>
      <Image
        style={styles.undrawMyLocationReR52x1Icon}
        contentFit="cover"
        source={require("../assets/undraw-my-location-re-r52x-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  undrawMyLocationReR52x1Icon: {
    width: 255,
    height: 355,
    overflow: "hidden",
  },
  onboarding: {
    backgroundColor: "rgba(224, 219, 213, 0.47)",
    flex: 1,
    width: "100%",
    height: 852,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default Onboarding;
