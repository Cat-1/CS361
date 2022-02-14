import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, SafeAreaView, Text, TextInput, View } from 'react-native';
import styles from '../Style';
import DropDownPicker from 'react-native-dropdown-picker';

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
    const [openOrig, setOpenOrig] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const [valueOrig, setValueOrig] = useState(null);
    const [valueNew, setValueNew] = useState(null);
    const [items, setItems] = useState([
        {label: "g", value: "g"},
        {label: "mg", value: "mg"},
        {label: "oz", value: "oz"},
        {label: "cups", value: "cups"},
    ])

    return (
    <SafeAreaView style={styles.container}>
        <View style={unitStyles.outerContainer}>
            <Text style={styles.header}>Original Units</Text>
            <View style={unitStyles.innerContainer}>
                <TextInput
                    placeholder="ex: 5"
                    onChangeText={onChangeNumber}
                    style={unitStyles.input}
                    value={number}
                    keyboardType="numeric"
                />
                <DropDownPicker
                    open={openOrig}
                    value={valueOrig}
                    items={items}
                    setOpen={setOpenOrig}
                    setValue={setValueOrig}
                    setItems={setItems}
                    containerStyle={{width: "50%"}}
                    zIndex={5000} 
                    placeholder="Select unit"
                />
            </View>
        </View>
        <View style={unitStyles.outerContainer}>
            <Text style={styles.header}>Convert to</Text>
            <DropDownPicker
                    open={openNew}
                    value={valueNew}
                    items={items}
                    setOpen={setOpenNew}
                    setValue={setValueNew}
                    setItems={setItems}
                    containerStyle={{width: "50%"}}
                    zIndex={1000}
                    placeholder="Select unit"
            />
        </View>
        <View style={unitStyles.outerContainer}>
            <Text style={styles.header}>Result</Text>
            <Text>Results go here!</Text>
        </View>
    </SafeAreaView>
    );
}

const unitStyles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        height: 60,
        width: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    innerContainer: {
        display: "flex",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        height: 100,
    },
    outerContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 30,
    }
  });
