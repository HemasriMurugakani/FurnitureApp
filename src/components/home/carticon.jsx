import React from 'react';
import { View, StyleSheet } from 'react-native';

const CartContainer = ({ size = 100 }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
{/* <Svg height={size * 0.8} width={size * 0.7} viewBox="0 0 24 21">
        <Path
          fill="black" // Set the fill color for the cart icon
          d="M7 4V2h10v2h2l1 1v1h-1l-1.25 9h-12.5L5 6H2V4h5zM5 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm14 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-7-2h6l1.25-9H7.5L6 8h7l1 8z"
        />
      </Svg> */}
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

export default CartContainer;
