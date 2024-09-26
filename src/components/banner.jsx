import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Svg, Path } from 'react-native-svg'; // Import SVG for the arrow icon

const ArrowIcon = ({ size = 30 }) => (
  <Svg height={size} width={size} viewBox="0 0 24 16">
    <Path fill="black" d="M10 6l4 4-4 4v-3H0v-2h10V6z" />
  </Svg>
);

const Banner = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://t3.ftcdn.net/jpg/04/78/41/36/360_F_478413613_7kJADcvjJXAoJFvfLekU5We38KhXMVVz.jpg' }} // Replace with your image URI
      style={styles.bannerContainer}
      imageStyle={styles.imageStyle}
    >
      <Text style={styles.bannerTitle}>Tamas Living</Text>
      <Text style={styles.bannerDescription}>
        New Perfect Collection Available
      </Text>
      <TouchableOpacity style={styles.shopNowButton}>
        <Text style={styles.shopNowText}>Shop Now</Text>
        <ArrowIcon />
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginLeft:20,
    overflow: 'hidden', // Ensure the image fits within the rounded edges
    justifyContent: 'center', // Center the content
    width:280,
    height:160,
    marginTop:-10,
    marginBottom:10,
  },
  imageStyle: {
    borderRadius: 10, // Match the container's border radius
  },
  bannerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white', // Change text color for better visibility
    paddingBottom:10,
  },
  bannerDescription: {
    color: 'white', // Change text color for better visibility
    fontSize:12,
    paddingRight:80,
  },
  shopNowButton: {
    marginTop: 10,
    backgroundColor: 'white',
    // paddingVertical: 5,
    // paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row', // Align text and icon in a row
    alignItems: 'center', // Center vertically
    width:110,
    height:30,
  
  },
  shopNowText: {
    color: 'black',
    textAlign: 'center',
    marginRight: 5, // Space between text and icon
    fontSize:11,
    fontWeight:'bold',
    marginLeft:15,
  },
});

export default Banner;