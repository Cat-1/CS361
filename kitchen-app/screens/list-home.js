import React, {useEffect, useState} from 'react';
import { 
  Button,
  Dimensions, 
  FlatList, 
  Modal, 
  Image,
  Linking, 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Style';

const dummyData = [
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
];

export default function ListHome() {
  const [wikiData, setWikiData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

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
      // <ListItem
      //   title={item.name}
      //   subtitle={item.expDate}
      //   leftAvatar={ {source: {uri: item.imgurl}} }
      // />

      <View style={listStyle.listItem}>
        <Image
          source={item.imgurl}
          style={listStyle.itemImg}
        />
        <View style={listStyle.itemDetailsColumn}>
          <Text style={listStyle.itemName}>{item.name}</Text>
          <Text>{`Exp: ${item.expDate}`}</Text>
        </View>
        <Icon
          name="info-circle"
          size={30}
          onPress={() => fetchWiki({item})}
        />
        {/* <Image source={{uri: {item.imgurl}}} /> */}
      </View>

    )
    

  }

  const keyExtractor = (item) => {
    return item.id;
  }

//  const fetchData = async() => {
//     const response = await fetch(`http://localhost:8080/info/${item.name}`);
//     const data = await response.json();
//     setData(data);

//   } 

  // const getWikiInfo = ({item}) => {
  //   axios.get(`http://localhost:8080/info/${item.name}`)
  //     .then((response) => setWikiData(response.data))
  //     .catch((error) => console.log(error));
  // }
  

  return (
      <SafeAreaView style={styles.container}>
        <Header />
        {/* <View style={{width: "100%"}}>
          {
            dummyData.map((l,i) => (
              <ListItem key={i}>
                <ListItem.Content style={listStyle.listItem}>
                  <ListItem.Title>{l.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View> */}
        <FlatList 
          data={dummyData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          />
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          
          <View style={listStyle.modal}>
            
            <ScrollView>
              <View style={listStyle.modalContent}> 
                <Text style={listStyle.itemName}>Details</Text>
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
  listItem: {
    backgroundColor: "#ACB992",
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 25,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  itemName: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#464E2E",
  },
  itemDetailsColumn: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
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
  itemImg: {
    width: 100,
    height: 100,
  },
  modalContent: {
    margin: 15,
  },
  modalBody: {
    fontSize: 16,
  }
})
