import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Search from '../../assets/icons/search';
// import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({width,height}) => {
 
  return (
    <View style={[styles.searchContainer,{width,height}]}>
      <View>
      <Image
        source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/magnifying-glass-18.png' }}  // URL to the magnifying glass image
        style={styles.icon}
      />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search furniture"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 25,  
    // paddingHorizontal: 5,
    marginVertical: 30,
    marginLeft:12,
    width:200,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 25,
    padding: 13,
  },
  icon: {
    width: 30,  
    height: 30, 
  },
});

export default SearchBar;