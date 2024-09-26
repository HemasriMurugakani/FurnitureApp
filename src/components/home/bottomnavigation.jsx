import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {Svg,Path} from 'react-native-svg'
const BottomNavigation = () => {
  return (
    <>
    <View style={styles.navContainer}>
      <TouchableOpacity style={styles.navItem}>
        <Text>Home</Text>
        
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => navigation.navigate('Discover')} // Navigate to Profile page
      >
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 2a10 10 0 110 20 10 10 0 010-20z"
            fill="#ccc" // Gray color for inactive icons
          />
        </Svg>
        <Text style={styles.inactiveText}>Discover</Text>
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
