import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HelpAndSupport1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.helpAndSupport, style]}
      onPress={() => navigation.navigate("MenuScreen")}
    >
      <Image
        style={styles.helpAndSupport1}
        contentFit="cover"
        source={require("../assets/help-and-support1.png")}
      />
      <Text style={styles.helpAndSupport2}>Help and Support</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  helpAndSupport1: {
    width: 16,
    height: 16,
  },
  helpAndSupport2: {
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.textColorContentSecondary,
    textAlign: "left",
    marginLeft: 8,
  },
  helpAndSupport: {
    position: "absolute",
    top: 443,
    left: 17,
    flexDirection: "row",
  },
});

export default HelpAndSupport1;
