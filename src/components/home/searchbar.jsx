import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <Image
        source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/magnifying-glass-18.png' }}  // URL to the magnifying glass image
        style={styles.icon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search furniture"
        placeholderTextColor="#999"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
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
    padding: 10,
    paddingLeft: 8,  
  },
  icon: {
    width: 30,  
    height: 30, 
    marginRight: -6,  
    marginLeft:10,
  },
});
export default SearchBar;
