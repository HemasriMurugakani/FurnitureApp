import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
const BottomNavigation = () => {
  return (
    <>
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navItem}>
        <Text>Home</Text>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        
        <Text>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        
        <Text>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
       
        <Text>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
       
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height:70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default BottomNavigation;
