import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import BreadDetailScreen from "../screens/BreadDetailScreen.js"
import CategoriesScreen from "../screens/CategoriesScreen.js"
import CategoryBreadScreen from "../screens/CategoryBreadScreen.js"
import { COLORS } from '../../constants/colors.js';
import CartScreen from '../screens/CartScreen.js';

const Stack = createNativeStackNavigator();

export default function ShopNavigator() {

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.secondary,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Mi Panaderia",
        }}
      />
      <Stack.Screen
        name="Bread"
        component={CategoryBreadScreen}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Details"
        component={BreadDetailScreen}
        options={({ route }) => ({
          title: route.params.name,

        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: 'center'
  },

})