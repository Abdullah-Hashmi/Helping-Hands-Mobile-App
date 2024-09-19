import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import SeekerCard from "../components/SeekerCard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontFamily } from "../GlobalStyles";
import ChatScreen from "./ChatScreen";
import HelpDetail from "./HelpDetail";

const Stack = createStackNavigator();

const HelpSeekersScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HelpSeekers"
          component={HelpSeekers} // Corrected component name
          options={{
            headerTitle: "Help Seekers",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: FontFamily.subheadLgSHLgMedium,
            },
            headerLeft: () => <HeaderLeftComponent />,
          }}
        />
        <Stack.Screen
          name="HelpDetails" // Include the HelpDetails route
          component={HelpDetail}
          options={{
            title: "Help Details",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: FontFamily.subheadLgSHLgMedium,
            },
          }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{
            title: "Chat",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: "#FFFFFF",
            },
            headerTintColor: "#000000",
            headerTitleStyle: {
              fontWeight: "bold",
              fontFamily: FontFamily.subheadLgSHLgMedium,
            },
          }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

const HeaderLeftComponent = () => {
  const navigation = useNavigation();

  return (
    <Ionicons
      name="arrow-back-sharp"
      size={24}
      color="#000000"
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    />
  );
};

const HelpSeekers = () => {
  const navigation = useNavigation();

  const navigateToMessageScreen = () => {
    navigation.navigate("ChatScreen");
  };

  const navigateToHelpDetails = () => {
    navigation.navigate("HelpDetails");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.cardContainer}>
        <SeekerCard
          buttonText1={<Text onPress={navigateToHelpDetails}>View More</Text>}
          buttonText2={
            <Text onPress={navigateToMessageScreen}>Acknowledge</Text>
          }
          headingText={<Text>XYZ Help Seeker</Text>}
          descriptionText={
            <Text>
              This is the description of the help the helper ask for if you can
              provide the require help then acknowledge it
            </Text>
          }
        />
      </View>
      <View style={styles.cardContainer}>
        <SeekerCard
          buttonText1={<Text onPress={navigateToHelpDetails}>View More</Text>}
          buttonText2={
            <Text onPress={navigateToMessageScreen}>Acknowledge</Text>
          }
          headingText={<Text>XYZ Help Seeker</Text>}
          descriptionText={
            <Text>
              This is the description of the help the helper ask for if you can
              provide the require help then acknowledge it
            </Text>
          }
        />
      </View>
      <View style={styles.cardContainer}>
        <SeekerCard
          buttonText1={<Text onPress={navigateToHelpDetails}>View More</Text>}
          buttonText2={
            <Text onPress={navigateToMessageScreen}>Acknowledge</Text>
          }
          headingText={<Text>XYZ Help Seeker</Text>}
          descriptionText={
            <Text>
              This is the description of the help the helper ask for if you can
              provide the require help then acknowledge it
            </Text>
          }
        />
      </View>
      <View style={styles.cardContainer}>
        <SeekerCard
          buttonText1={<Text onPress={navigateToHelpDetails}>View More</Text>}
          buttonText2={
            <Text onPress={navigateToMessageScreen}>Acknowledge</Text>
          }
          headingText={<Text>XYZ Help Seeker</Text>}
          descriptionText={
            <Text>
              This is the description of the help the helper ask for if you can
              provide the require help then acknowledge it
            </Text>
          }
        />
      </View>
      <View style={styles.cardContainer}>
        <SeekerCard
          buttonText1={<Text onPress={navigateToHelpDetails}>View More</Text>}
          buttonText2={
            <Text onPress={navigateToMessageScreen}>Acknowledge</Text>
          }
          headingText={<Text>ABC Help Seeker</Text>}
          descriptionText={
            <Text>
              This is the description of the help the helper ask for if you can
              provide the require help then acknowledge it
            </Text>
          }
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  cardContainer: {
    marginVertical: 3,
  },
  backButton: {
    marginLeft: 10,
  },
});

export default HelpSeekersScreen;
