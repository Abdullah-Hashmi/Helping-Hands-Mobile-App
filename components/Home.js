import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { Image } from "expo-image";

const Home = ({ style }) => {
  return (
    <View style={[styles.home, style]}>
      <Image
        style={styles.houseFillIcon}
        contentFit="cover"
        source={require("../assets/house-fill11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  houseFillIcon: {
    top: 0,
    left: 6,
    width: 24,
    height: 24,
    position: "absolute",
  },
  home1: {
    top: 24,
    left: 0,
    fontSize: FontSize.captionCaptionMedium_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.subheadLgSHLgMedium,
    color: Color.baseColorPrimaryColor,
    textAlign: "left",
    position: "absolute",
  },
  home: {
    width: 36,
    height: 42,
  },
});

export default Home;
