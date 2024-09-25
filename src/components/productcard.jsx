import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text>{product.brand}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.heartIcon}>
        {/* <AntDesign name="hearto" size={24} color="black" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ProductCard;
