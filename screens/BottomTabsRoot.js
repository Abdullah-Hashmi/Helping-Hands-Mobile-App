// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// // Screens
// import Home from "../components/Home";
// import Event1 from "./Event1";
// import ChatScreen from "./ChatScreen";

// // Screen names
// const homeName = "Home";
// const eventName = "Events";
// const chatName = "Chat";

// const Tab = createBottomTabNavigator();

// function BottomTabsRoot() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName={homeName}
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             let rn = route.name;

//             if (rn === homeName) {
//               iconName = focused ? "home" : "home-outline";
//             } else if (rn === eventName) {
//               iconName = focused ? "list" : "list-outline";
//             } else if (rn === chatName) {
//               iconName = focused
//                 ? "chatbox-ellipses"
//                 : "chatbox-ellipses-outline";
//             }

//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//         tabBarOptions={{
//           activeTintColor: "green",
//           inactiveTintColor: "grey",
//           labelStyle: { paddingBottom: 10, fontSize: 10 },
//           style: { padding: 10, height: 70 },
//         }}
//       >
//         <Tab.Screen name={homeName} component={Home} />
//         <Tab.Screen name={eventName} component={Event1} />
//         <Tab.Screen name={chatName} component={ChatScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default BottomTabsRoot;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BottomTabsRoot = () => {
  return (
    <View style={styles.container}>
      <Text>BottomTabsRoot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BottomTabsRoot;
