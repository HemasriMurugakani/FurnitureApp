import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Banner = () => {
  return (
    <View style={styles.bannerContainer}>
      <Text style={styles.bannerTitle}>Tamas Living</Text>
      <Text>New Collection from Walter Knoll that perfect for your Living Room</Text>
      <TouchableOpacity style={styles.shopNowButton}>
        <Text style={styles.shopNowText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  bannerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  shopNowButton: {
    marginTop: 10,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
  },
  shopNowText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Banner;
