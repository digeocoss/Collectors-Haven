/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import CameraUse from "../components/Camera/Camera";
import App from "../components/Feed/Feed";
import Profile from "../components/Profile/Profile";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { Ionicons, Entypo, FontAwesome5 } from "@expo/vector-icons";
import SinglePage from "../components/SinglePage/SinglePage";
import MakeNFT from "../components/NFTscreen/MakeNFT";
import Post from "../components/Post/Post";
import Confirmation from "../components/Confirmation Screen/Confirmation";
import TradeTemp from "../components/TradePageTemp/TradeTemp";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>

      <Stack.Screen
        name="Post"
        component={Post}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="ConfirmationPage"
        component={Confirmation}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="SinglePage"
        component={SinglePage}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="MakeNFT"
        component={MakeNFT}
        options={{ header: () => null }}
      />

      <Stack.Screen
        name="TradeTemp"
        component={TradeTemp}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#084F6D",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          paddingBottom: "2%",
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          marginStart: -10,
          marginEnd: -10,
        },
      }}
    >
      <BottomTab.Screen
        name="Camera"
        component={CameraUse}
        options={({ navigation }: RootTabScreenProps<"Camera">) => ({
          tabBarIcon: ({ color }) => (
            <Entypo name="camera" size={50} color={color} />
          ),
          header: () => null,
          tabBarStyle: { display: "none" },
        })}
      />
      <BottomTab.Screen
        name="Feed"
        component={App}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={50} color={color} />
          ),
          header: () => null,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-circle" size={50} color={color} />
          ),
          header: () => null,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
