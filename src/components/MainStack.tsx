import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./HomeScreen";
import { ProcessingScreen } from "./ProcessingScreen";
import { PlaybackScreen } from "./PlaybackScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
  <BaseNavigationContainer>
    <StackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#333",
        },
        headerTintColor: "#fff",
        headerShown: true,
      }}
    >
      <StackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <StackNavigator.Screen
        name="Processing"
        component={ProcessingScreen}
        options={{ title: "Processing" }}
      />
      <StackNavigator.Screen
        name="Playback"
        component={PlaybackScreen}
        options={{ title: "Playback" }}
      />
    </StackNavigator.Navigator>
  </BaseNavigationContainer>
);