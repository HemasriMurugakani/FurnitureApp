import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';

const ProductCard = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productBrand}>{product.brand}</Text>
      <Text style={styles.productdescription}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.heartIcon}>
        {/* <AntDesign name="hearto" size={24} color="black" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    position: 'relative',
    height:150,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize:14,
    color:'black',
  },
  productBrand: {
    // fontWeight: 'bold',
    marginTop: 2,
    fontSize:14,
    color:'grey',
  },
  productdescription: {
    // fontWeight: 'bold',
    marginTop: 2,
    fontSize:12,
    color:'grey',
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize:14,
    color:'black',
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default ProductCard;
