import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBar = () => {
    return (
        
        <View style={searchStyle.container}>
            <View style={searchStyle.searchBar}>
            <TextInput 
                style={searchStyle.searchInput} 
                placeholder="Search here..."
                autoCorrect={false}
                clearButtonMode="always"
                onChangeText={queryText => handleSearch(queryText)}
            />
            </View>
        </View>
    )
}

const searchStyle = StyleSheet.create({
    container: {
        padding: 5,
        width: "90%"
    },
    searchBar:{
        width: "100%",
        height: 50,
        backgroundColor: "#FBF8F1",
        padding: 10,
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingLeft: 5,
        fontSize: 20
    }
})

export default SearchBar;