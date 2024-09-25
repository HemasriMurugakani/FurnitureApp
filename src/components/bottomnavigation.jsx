import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

const BottomNavigation = () => {
  return (
    <View style={styles.navContainer}>
      {/* <TouchableOpacity style={styles.navItem}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="search-outline" size={24} color="black" />
        <Text>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="heart-outline" size={24} color="black" />
        <Text>Wishlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="cart-outline" size={24} color="black" />
        <Text>Order</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Ionicons name="person-outline" size={24} color="black" />
        <Text>Profile</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default BottomNavigation;
