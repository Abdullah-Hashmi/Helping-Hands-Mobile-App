const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding from "./screens/Onboarding";

import Frame from "./screens/Frame";
import HelpCenter from "./screens/HelpCenter";
import ThankYouScreen from "./screens/ThankYouScreen";
import Complain from "./screens/Complain";
import AboutUsScreen from "./screens/AboutUsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ChangeHelpScreen from "./screens/ChangeHelpScreen";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import ContactUS from "./screens/ContactUS";
import DeleteAccount from "./screens/DeleteAccount";
import HelpAndSupport from "./screens/HelpAndSupport";
import HelpDetail from "./screens/HelpDetail";
import ComplainScuessful from "./screens/ComplainScuessful";
import Frame1 from "./screens/Frame1";
import HelpDescription from "./screens/HelpDescription";
import LocationScreenConfirm from "./screens/LocationScreenConfirm";
import ChatScreen from "./screens/ChatScreen";
import HelperProfile from "./screens/HelperProfile";
import NotificationScreen from "./screens/NotificationScreen";
import MenuScreen from "./components/MenuScreen";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import PhoneVerifyOtp from "./screens/PhoneVerifyOtp";
import CompleteYourProfile from "./screens/CompleteYourProfile";
import Profile from "./screens/Profile";
import Event1 from "./screens/Event1";
import HelpSeekersScreen from "./screens/HelpSeekersScreen";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding3 from "./screens/Onboarding3";
import EnableLocation from "./screens/EnableLocation";
import WelcomeScreen from "./screens/WelcomeScreen";
import History1 from "./components/History1";
import Complain1 from "./components/Complain1";
import Settings from "./components/Settings";
import HelpAndSupport1 from "./components/HelpAndSupport1";
import Logout from "./components/Logout";
import Home1 from "./components/Home1";
import VectorIcon from "./components/VectorIcon";
import VectorIcon1 from "./components/VectorIcon1";
import MessageScreen from "./screens/MessageScreen";
import * as Font from "expo-font";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  AppRegistry,
} from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainContainer from "./screens/MainContainer";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Onboarding2"
            // initialRouteName="MessageScreens"
            screenOptions={{ headerShown: false }}
          >
            {/* <Stack.Screen name="MainContainer" component={MainContainer} /> */}
            <Stack.Screen name="MainContainer" component={MainContainer} />

            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpCenter"
              component={HelpCenter}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ThankYouScreen"
              component={ThankYouScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUsScreen"
              component={AboutUsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordScreen"
              component={ForgotPasswordScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
              options={{ headerShown: false }}
            />

            <Stack.Screen
              name="ChangeHelpScreen"
              component={ChangeHelpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrivacyPolicy"
              component={PrivacyPolicy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUS"
              component={ContactUS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DeleteAccount"
              component={DeleteAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpAndSupport"
              component={HelpAndSupport}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpDetail"
              component={HelpDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ComplainScuessful"
              component={ComplainScuessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpDescription"
              component={HelpDescription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationScreenConfirm"
              component={LocationScreenConfirm}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelperProfile"
              component={HelperProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NotificationScreen"
              component={NotificationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PhoneVerifyOtp"
              component={PhoneVerifyOtp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CompleteYourProfile"
              component={CompleteYourProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HelpSeekersScreen"
              component={HelpSeekersScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EnableLocation"
              component={EnableLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Onboarding />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
// AppRegistry.registerComponent("Helping-Hands-UI", () => App);
