import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons/Ionicons";
import BreadDetailScreen from "../screens/BreadDetailScreen.js"
import CategoriesScreen from "../screens/CategoriesScreen.js"
import CategoryBreadScreen from "../screens/CategoryBreadScreen.js"
import { COLORS } from '../../constants/colors.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CartScreen from '../screens/CartScreen.js';
import ShopNavigator from './ShopNavigator.js';
import CartNavigator from './CartNavigator';


const BottomTabs = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <BottomTabs.Navigator
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}
        >
            <BottomTabs.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focus }) => (
                        <View style={styles.item}>
                            <Ionicons name="home" size={20} color="black" />
                            <Text>Home</Text>
                        </View>
                    ),
                }}
            />
            <BottomTabs.Screen
                name="CartTab"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focus }) => (
                        <View style={styles.item}>
                            <Ionicons name="cart" size={20} color="black" />
                            <Text>Carrito</Text>
                        </View>
                    ),
                    title: "carrito",
                }}
            />

            <BottomTabs.Screen
                name="OrdersTab"
                component={CategoryBreadScreen}
                options={{
                    tabBarIcon: ({ focus}) => (
                        <View style={styles.item}>
                            <Ionicons name="list" size={20} color="black" />
                            <Text>Ordenes</Text>
                        </View>
                    ),
                }}
            />

        </BottomTabs.Navigator>

    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: "#7f5df0",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    item: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});