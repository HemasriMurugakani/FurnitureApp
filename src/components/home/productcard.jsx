import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const RoundIcon = ({ size = 100, imageUri }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}> 
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productBrand}>{product.brand}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
     
    </TouchableOpacity>
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