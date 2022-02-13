import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import styles from '../Style';

export default function PantryHome() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Kitchen screen here!</Text>
    </SafeAreaView>
  );
}

