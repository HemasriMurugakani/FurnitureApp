import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Svg,Path} from 'react-native-svg' ;
const RoundImageContainer = ({ size = 100 }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg height={size * 0.7} width={size * 0.7} viewBox="0 0 24 24">
        <Path
          fill=""
          d="M12 22c1.1 0 1.99-.9 1.99-2H10c0 1.1.89 2 2 2zm6-6v-5c0-2.92-1.64-5.44-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10 3.17 10 4v.68C7.14 5.56 5.5 8.08 5.5 11v5l-1.5 1.5v1h16v-1l-1.5-1.5z"
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50, // For circular shape
    overflow: 'hidden', // Ensures the SVG fits inside the round container
    backgroundColor: 'white', // Set a valid background color
    alignItems: 'center', // Center any content (optional)
    justifyContent: 'center', // Center any content (optional)
  },
});

export default RoundImageContainer;
