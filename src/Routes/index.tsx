import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import ProductsList from '../pages/ProductsList';
import UserRegistration from '../pages/UserRegistration';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />

            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Products" component={ProductsList} />
                <Stack.Screen
                    name="UserRegistration"
                    options={{
                        title: "Cadastro"
                    }}
                    component={UserRegistration}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
