import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const ProductCard = ({ product }) => {
  const navigation = useNavigation(); // Access the navigation object

  const handlePress = () => {
    // Navigate to ProductDetails screen, passing the product as a parameter
    navigation.navigate('ProductDetails', { product });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}> {/* Wrap with TouchableOpacity */}
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productBrand}>{product.brand}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.heartIcon}>
        {/* <AntDesign name="hearto" size={24} color="black" /> */}
      </TouchableOpacity>
    </TouchableOpacity>
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
