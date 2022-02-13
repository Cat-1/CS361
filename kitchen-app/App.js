import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { createAppContainer, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/home';
import ListHome from './screens/list-home';
import UnitConverter from './screens/unit-converter';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="List" component={ListHome} />
        <Stack.Screen name="Converter" component={UnitConverter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
