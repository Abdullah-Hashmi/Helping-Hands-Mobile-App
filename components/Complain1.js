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

const Complain1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.complain, style]}
      onPress={() => navigation.navigate("Complain")}
    >
      <Pressable
        style={styles.complain1}
        onPress={() =>
          navigation.navigate("DrawerRoot", { screen: "Complain" })
        }
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/complain1.png")}
        />
      </Pressable>
      <Text style={styles.complain2}>Complain</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  complain1: {
    width: 16,
    height: 16,
  },
  complain2: {
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.textColorContentSecondary,
    textAlign: "left",
    marginLeft: 8,
  },
  complain: {
    flexDirection: "row",
  },
});

export default Complain1;
