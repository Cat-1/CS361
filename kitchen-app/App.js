import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import { createAppContainer, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/home';
import ListHome from './screens/list-home';
import UnitConverter from './screens/unit-converter';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="List" component={ListHome} />
        <Stack.Screen name="Converter" component={UnitConverter} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            }
            else if (route.name === "List") {
              iconName = focused ? "list" : "list-outline";
            }
            else if (route.name === "Converter") {
              iconName = focused ? "calculator" : "calculator-outline";
            }

            return <Ionicons name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
        })} 
        >
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="List" component={ListHome} />
        <Tab.Screen name="Converter" component={UnitConverter} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
