import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, SafeAreaView, Text, TextInput, View } from 'react-native';
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
    const [number, setNumber] = useState('');
    const [openOrig, setOpenOrig] = useState(false);
    const [openNew, setOpenNew] = useState(false);
    const [valueOrig, setValueOrig] = useState('');
    const [valueNew, setValueNew] = useState('');
    const [items, setItems] = useState([
        {label: "C", value: "Celsius"},
        {label: "cups", value: "cups"},
        {label: "F", value: "Fahrenheit"},
        {label: "L", value: "liters"},
        {label: "mL", value: "milliliters"},
        {label: "oz", value: "ounces"},
        {label: "pints", value: "pints"},
        {label: "q", value: "quarts"},
        {label: "tb", value: "tablespoons"},
        {label: "tsp", value: "teaspoons"},
    ]);
    const [result, setResult] = useState('');
    const [showResult, setShowResult] = useState(false);

    const fetchResult = () => {
        fetch(`http://192.168.1.185:8000/convertUnits/${number}/${valueOrig}/${valueNew}`)
          .then((response) => response.json())
        //   .then((response) => console.log(response))
          .then((responseJson) => {
            // console.log(responseJson)
            setResult(responseJson);
          })
          .catch((error) => console.log(error))
          .finally(() => setShowResult(true))
    };

    
    // console.log(number);
    // console.log(valueOrig);
    // console.log(valueNew);
    // console.log(result);

    return (
    <SafeAreaView style={styles.container}>
        <View style={unitStyles.outerContainer}>
            <Text style={styles.header}>Original Units</Text>
            <View style={unitStyles.innerContainer}>
                <TextInput
                    placeholder="ex: 5"
                    onChangeText={text=>setNumber(text)}
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
                    onChangeValue={(value) => setValueOrig(value)}
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
                    onChangeValue={(value) => setValueNew(value)}
            />
        </View>
        <View>
            <Button title="Calculate" onPress={() => fetchResult()} />
        </View>
        <View style={unitStyles.outerContainer}>
            <Text style={styles.header}>Result</Text>
            {showResult ? <Text style={unitStyles.resultText}>{result}</Text> : null}            
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
    },
    resultText: {
        fontSize: 30,
    }
  });
