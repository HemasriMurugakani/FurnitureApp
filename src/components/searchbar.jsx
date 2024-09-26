import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
const SearchBar = ({width,height}) => {
 
  return (
    <View style={[styles.searchContainer,{width,height}]}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search furniture"
      />
      {/* <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    padding: 13,
  },
});

export default SearchBar;
