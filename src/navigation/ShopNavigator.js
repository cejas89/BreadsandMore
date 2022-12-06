import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import BreadDetailScreen from "../screens/BreadDetailScreen.js"
import CategoriesScreen from "../screens/CategoriesScreen.js"
import CategoryBreadScreen from "../screens/CategoryBreadScreen.js"
import { COLORS } from '../../constants/colors.js';

const Stack = createNativeStackNavigator();

export default function ShopNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={CategoriesScreen}
                    options={{
                        title: 'Home',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }}
                />
                <Stack.Screen name="Bread" component={CategoryBreadScreen}
                    options={{
                        title: 'Bread',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#00008b',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }}
                />
                <Stack.Screen name="Detail" component={BreadDetailScreen}
                    options={{
                        title: 'Detail',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#00008b',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
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