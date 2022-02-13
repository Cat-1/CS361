import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown';

const dummyUnits = [
    {
        value: "g"
    },
    {
        value: "mg"
    },
    {
        value: "lb"
    },
    {
        value: "oz"
    }
]

export default function UnitConverter() {
    const [number, onChangeNumber] = useState("");

    return (
    <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Text>Unit converter screen here!</Text>
        <TextInput
            placeholder="Enter value..."
            onChangeText={onChangeNumber}
            style={unitStyles.input}
            value={number}
            keyboardType="numeric"
        />
        <Dropdown
            label="Units"
            data={dummyUnits}
        />
    </SafeAreaView>
    );
}

const unitStyles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  });
