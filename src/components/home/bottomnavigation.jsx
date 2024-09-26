import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BottomNavigation = ({ navigation }) => { // Destructure navigation prop
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.tab}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M3 12l9-9 9 9v9a3 3 0 01-3 3H6a3 3 0 01-3-3v-9z"
            fill="#D97B3A" // Orange color for the Home icon
          />
        </Svg>
        <Text style={styles.activeText}>Home</Text>
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

      <TouchableOpacity style={styles.tab}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 4.248c-3.148 0-5.704 2.555-5.704 5.704 0 3.978 5.704 8.8 5.704 8.8s5.704-4.822 5.704-8.8c0-3.149-2.556-5.704-5.704-5.704z"
            fill="#ccc"
          />
        </Svg>
        <Text style={styles.inactiveText}>Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M6 2h12v2H6V2zm0 4h12v2H6V6zm0 4h12v10H6V10z"
            fill="#ccc"
          />
        </Svg>
        <Text style={styles.inactiveText}>Order</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => navigation.navigate('Profile')} // Navigate to Profile page
      >
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path
            d="M12 12c-2.208 0-4-1.792-4-4s1.792-4 4-4 4 1.792 4 4-1.792 4-4 4zm0 2c-2.67 0-8 1.336-8 4v2h16v-2c0-2.664-5.33-4-8-4z"
            fill="#ccc"
          />
        </Svg>
        <Text style={styles.inactiveText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingTop: 10,
    paddingLeft:12,
    paddingRight:10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  tab: {
    alignItems: 'center',
  },
  activeText: {
    color: '#D97B3A',
    fontSize:14,
    
  },
  inactiveText: {
    color: '#ccc',
    fontSize:14,
  },
};

export default BottomNavigation;
