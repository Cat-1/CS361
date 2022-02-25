import React from 'react';
import { 
  Button, 
  FlatList,
  Image, 
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View } from 'react-native';
import styles from '../Style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const dummyData = [
  {
    id: 1, 
    name: "Jam", 
    imgurl: require("../assets/jam.jpg"), 
    expDate: "2/28/2022",
  },
  {
    id: 2, 
    name: "Pasta",
    imgurl: require("../assets/pasta.jpg"), 
    expDate: "3/3/2022",
  }, 
];

export default function HomePage({navigation}) {

  const renderItem = ({item}) => {
    return (

      <View style={styles.listItem}>
        <Image
          source={item.imgurl}
          style={styles.itemImg}
        />
        <View style={styles.itemDetailsColumn}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text>{`Exp: ${item.expDate}`}</Text>
        </View>
        <Ionicons
          name="chevron-forward-outline"
        />
      </View>

    )
  }

  const keyExtractor = (item) => {
    return item.id;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome back, Emily!</Text>
      <View style={styles.divider} />
      {/* <Image 
          style={styles.headerImage} 
          source={require('../assets/fresh-food-image.jpg')}
        /> */}
      {/* <View style={{padding: 10}}><Button
        title="Ingredients List"
        onPress={() => navigation.navigate('List')}
      />
      </View> */}
      {/* <Button
        title="Unit Converter"
        onPress={() => navigation.navigate('Converter')}
      /> */}
      <Text style={styles.header}>Expiring Soon</Text>
      <View style={homeStyles.box}>
        <FlatList
          data={dummyData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}

const homeStyles = StyleSheet.create({
  box: {
    backgroundColor: '#ACB992',
    width: '75%',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center'
  }
});