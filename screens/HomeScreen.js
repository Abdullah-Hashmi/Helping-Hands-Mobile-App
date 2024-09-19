// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import SettingsScreen from "./SettingsScreen";
// import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import Profile from "./Profile";
// import { COLORS, FONTS, SIZES, icons } from "../constants";

// const Drawer = createDrawerNavigator();

// const HomeScreen = () => {
//   return (
//     <Drawer.Navigator initialRouteName="Home">
//       <Drawer.Screen name="Home" component={HomeContent} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       {/* <Drawer.Screen name="Profile" component={Profile} /> */}
//     </Drawer.Navigator>
//   );
// };

// const HomeContent = () => {
//   const navigation = useNavigation();

//   const handleButton1Press = () => {
//     // Handle button 1 press
//     navigation.navigate("HelpCenter");
//   };

//   const handleButton2Press = () => {
//     navigation.navigate("HelpSeekersScreen");
//   };

//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Image source={require("../assets/logo.png")} style={styles.logo} />
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={{
//             marginRight: 5,
//             width: "60%",
//             backgroundColor: "#D78340",
//             borderRadius: 5,
//             borderWidth: 2,
//             borderColor: "#D78340",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onPress={handleButton1Press}
//         >
//           <Text
//             style={{
//               color: "#ffffff",
//               fontSize: 16, // Sample font size
//             }}
//           >
//             Shout For Help
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={{
//             marginLeft: 5,
//             width: "60%",
//             height: 50,
//             backgroundColor: "#28a745",
//             borderColor: "green",
//             borderRadius: 5,
//             borderWidth: 2,
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//           onPress={handleButton2Press}
//         >
//           <Text
//             style={{
//               color: "#ffffff",
//               fontSize: 16, // Sample font size
//             }}
//           >
//             Ready To Help
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     width: "70%",
//     marginBottom: 100,
//     padding: 0,
//   },
//   logo: {
//     width: 400,
//     height: 700,
//     marginBottom: -100,
//   },
// });

// export default HomeScreen;

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsScreen from "./SettingsScreen";
import NotificationScreen from "./NotificationScreen"; // Make sure to import NotificationScreen
import Profile from "./Profile";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={HomeContent}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("NotificationScreen")}
              style={{ marginHorizontal: 12 }}
            >
              <Image
                source={icons.bellOutline} // Ensure this path is correct
                resizeMode="contain"
                style={{
                  height: 24,
                  width: 24,
                  tintColor: COLORS.black,
                }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      {/* <Drawer.Screen name="Profile" component={Profile} /> */}
    </Drawer.Navigator>
  );
};

const HomeContent = () => {
  const navigation = useNavigation();

  const handleButton1Press = () => {
    navigation.navigate("HelpCenter");
  };

  const handleButton2Press = () => {
    navigation.navigate("HelpSeekersScreen");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{
            marginRight: 5,
            width: "60%",
            backgroundColor: "#D78340",
            borderRadius: 5,
            borderWidth: 2,
            borderColor: "#D78340",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleButton1Press}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Poppins-Regular", // Use the loaded font
            }}
          >
            Shout For Help
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginLeft: 5,
            width: "60%",
            height: 50,
            backgroundColor: "#28a745",
            borderColor: "green",
            borderRadius: 5,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={handleButton2Press}
        >
          <Text
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontFamily: "Poppins-Regular", // Use the loaded font
            }}
          >
            Ready To Help
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "70%",
    marginBottom: 100,
    padding: 0,
  },
  logo: {
    width: 400,
    height: 700,
    marginBottom: -100,
  },
});

export default HomeScreen;
