import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabNavigator";

export default function MainNavigator() {

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};