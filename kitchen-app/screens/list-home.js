import React, {useEffect, useState} from 'react';
import { 
  Button,
  Dimensions, 
  FlatList, 
  Modal, 
  Image,
  Linking, 
  SafeAreaView, 
  SectionList,
  ScrollView, 
  StyleSheet, 
  Text, 
  View } from 'react-native';
// import {SearchBar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Style';
import filter from 'lodash.filter';
import SearchBar from '../SearchBar';

const dummyData2 = [
  {
    title: "Favorites",
    data: 
      [
        {
        id: 1, 
        name: "Apple",
        imgurl: require("../assets/apple.jpg"), 
        expDate: "2/15/2023",
      }, 
      {
        id: 4, 
        name: "Soy Sauce", 
        imgurl: require("../assets/soysauce.png"), 
        expDate: "8/5/2022",
      },
    ]
  },
  {
    title: "All",
    data:
      [
        {
          id: 1, 
          name: "Apple",
          imgurl: require("../assets/apple.jpg"), 
          expDate: "2/15/2023",
        }, 
        {
        id: 2, 
        name: "Banana", 
        imgurl: require("../assets/Banana-Single.jpg"), 
        expDate: "2/20/2022",
      }, 
      {
        id: 3, 
        name: "Lucky Charms", 
        imgurl: require("../assets/luckycharms.jpg"), 
        expDate: "10/25/2024",
      }, 
      {
        id: 4, 
        name: "Soy Sauce", 
        imgurl: require("../assets/soysauce.png"), 
        expDate: "8/5/2022",
      },
    ]
  }
];

export default function ListHome() {
  const [wikiData, setWikiData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState("");

  const fetchWiki = ({item}) => {
    fetch(`http://192.168.1.185:8080/info/${item.name}`)
    //fetch(`http://10.0.2.2:8080/info/apple`)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson)
        setWikiData(responseJson);
      })
      .catch((error) => console.log(error))
      .finally(() => setModalVisible(true))
  };

  //console.log(wikiData);

  const Header = () => {
    return (
      <View>
        <Text style={styles.header}>
          View All Ingredients
        </Text>
      </View>
    )
  }

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
        <Icon
          name="info-circle"
          size={30}
          onPress={() => fetchWiki({item})}
        />
      </View>
    )
  }

  const keyExtractor = (item) => {
    return item.id;
  }
  
  const updateSearch = (search) => {
    setSearch(search);
  }

  return (
      <SafeAreaView style={styles.container}>
        
        <Header />
        <SearchBar />
        <SectionList
          sections={dummyData2}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          
          <View style={listStyle.modal}>
            <ScrollView>
              <View style={listStyle.modalContent}> 
                <Text style={styles.itemName}>Details</Text>
                <Text style={listStyle.modalBody}>{wikiData.summary}</Text>
                <Button
                  title="Read More on Wiki"
                  onPress={() => Linking.openURL(wikiData.link)}
                />
                <Text style={{alignSelf: "center"}}>(Clicking this will open a new window!)</Text>
              </View>
            </ScrollView>
            <Icon style={listStyle.closeIcon}
              name="close"
              size={30}
              onPress={() => setModalVisible(false)}
          />
          </View>
        </Modal>
      </SafeAreaView>
  );
}

const listStyle = StyleSheet.create({
  // listContainer:{
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  
  modal: {
    alignItems: "center",
    backgroundColor: "#FBF8F1",
    flex: 1,
    marginVertical: 260,
    marginHorizontal: 40,
    justifyContent: "center",
  },
  closeIcon: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
  },
  modalContent: {
    margin: 15,
  },
  modalBody: {
    fontSize: 16,
  },

})
