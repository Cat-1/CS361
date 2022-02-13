import React from 'react';
import { Button, Image, SafeAreaView, Text } from 'react-native';
import styles from '../Style';

export default function HomePage({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome back, Bear!</Text>
      <Image 
          style={styles.headerImage} 
          source={require('../assets/fresh-food-image.jpg')}
        />
      <Button
        title="Ingredients List"
        onPress={() => navigation.navigate('List')}
      />
    </SafeAreaView>
  );
}