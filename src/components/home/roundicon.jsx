import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const RoundIcon = ({ size = 100, imageUri }) => {
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Image
        source={{ uri: imageUri }} // Set the image source to the URI
        style={[styles.image, { width: size, height: size }]}
        resizeMode="cover" // Ensures the image covers the entire container
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50, // For circular shape
    overflow: 'hidden', // Ensures the image fits inside the round container
    backgroundColor: '#E8E8E8', // Set a valid background color
    alignItems: 'center', // Center any content (optional)
    justifyContent: 'center', // Center any content (optional)
    marginRight:15,
  },
  image: {
    borderRadius: 50, // Ensure the image is also round
  },
});

export default RoundIcon;
