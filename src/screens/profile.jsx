import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {Svg,Path} from 'react-native-svg'
const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksG4mm4xFN-Ufeaf1ZZ8ixWe2k4aZknK1MQ&s" // Replace with your image URL
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Product Details</Text>
      </View>
      <View style={styles.imageContainer}>
        <Product_image imageUrl={productData.image} />
      </View>
      <View style={styles.productInfoContainer}>
        <View style={styles.productTextContainer}>
          <Text style={styles.productName}>{productData.name}</Text>
          <Text style={styles.productBrand}>{productData.brand}</Text>
        </View>
        <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
          <Text style={styles.likeButtonText}>{liked ? '❤️' : '🤍'}</Text> 
        </TouchableOpacity>
      </View>
      <Text>Colors</Text>
      <View style={{flexDirection:'row'}}>
      <View style={styles.outerContainer}>
      <View style={styles.innerCircle}></View>
    </View>
    <View style={{flexDirection:'row',marginTop:1.5,}}>
    <View style={styles.innerCircle1}></View>
    <View style={styles.innerCircle2}></View>
    <View style={styles.innerCircle3}></View>
    <View style={styles.innerCircle4}></View>
    </View>
      </View>
      <Text>Product Description</Text>
      <Text style={styles.productDescription}>{productData.description}</Text>
      <View style={{flexDirection:'row'}}>
      <View>
      <Text>Total Price</Text>
      <Text style={styles.productPrice}>${productData.price}</Text>
      </View>
      <View style={{width:50}}>
        <Text>Add to Cart</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productTextContainer: {
    flex: 1,
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  productBrand: {
    fontSize: 15,
    color: '#666',
  },
  likeButton: {
    padding: 10,
  },
  likeButtonText: {
    fontSize: 25,
  },
  productPrice: {
    fontSize: 18,
    color: '#000',
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#333',
  },
  outerContainer: {
    height: 26,
    width: 27,
    borderColor: '#cbcecf',
    borderWidth: 1, 
     borderRadius: 23, 
     backgroundColor:'white',
    padding: 5,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  innerCircle: {
    height: 20,
    width: 20,
    backgroundColor: 'brown',
    borderRadius: 20,
  },
  innerCircle1: {
    marginLeft:8,
    height: 20,
    width: 20,
    backgroundColor: 'brown',
    borderRadius: 20,
  },
  innerCircle2: {
    marginLeft:8,
    height: 20,
    width: 20,
    backgroundColor: 'brown',
    borderRadius: 20,
  },
  innerCircle3: {
    marginLeft:8,
    height: 20,
    width: 20,
    backgroundColor: 'brown',
    borderRadius: 20,
  },
  
  innerCircle4: {
    marginLeft:8,
    height: 20,
    width: 20,
    backgroundColor: 'brown',
    borderRadius: 20,
  },
});

export default Product_Detail;