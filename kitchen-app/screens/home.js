import React from 'react';
import { Button, Image, SafeAreaView, Text, View } from 'react-native';
import styles from '../Style';

export default function HomePage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome back, Bear!</Text>
      <Image 
          style={styles.headerImage} 
          source={require('../assets/fresh-food-image.jpg')}
        />
      <View style={{padding: 10}}><Button
        title="Ingredients List"
        onPress={() => navigation.navigate('List')}
      />
      </View>
      <Button
        title="Unit Converter"
        onPress={() => navigation.navigate('Converter')}
      />
    </SafeAreaView>
  );
}