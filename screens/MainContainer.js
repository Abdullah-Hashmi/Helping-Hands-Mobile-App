import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
// Screens

import Event1 from "./Event1";
import MessageScreen from "./MessageScreen";
import HomeScreen from "./HomeScreen";

// Screen names
const homeName = "Home";
const eventsName = "Events";
const chatName = "Chat";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={HomeScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === eventsName) {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === chatName) {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { padding: 10, height: 70 },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "grey",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
      })}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={eventsName}
        component={Event1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={chatName}
        component={MessageScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
