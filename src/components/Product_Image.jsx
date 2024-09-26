import React from 'react';
import { View, Image } from 'react-native';

const Product_Image = ({ imageUrl }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:'#e1e6e8',margin:20,borderRadius:10,padding:10}}>
      {imageUrl && (
        <View>
        <Image 
          source={{ uri: imageUrl }} 
          style={{ width: 350, height: 250 ,resizeMode:'contain'}} 
        />
        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:30,marginVertical:10}}>
            <View style={{padding:9,backgroundColor:'white',borderRadius:5,borderColor:'#d2d9dc',borderWidth:1,}}>
        <Image 
          source={{ uri: imageUrl }} 
          style={{ width: 25, height: 25 }} 
        />
        </View>
        <View style={{padding:9,backgroundColor:'white',borderRadius:5,borderColor:'#a7afb3',borderWidth:1.5,}}>
        <Image 
          source={{ uri: imageUrl }} 
          style={{ width: 25, height: 25 }} 
        />
        </View>
        <View style={{padding:8,backgroundColor:'white',borderRadius:5,borderColor:'#d2d9dc',borderWidth:1,}}>
        <Image 
          source={{ uri: imageUrl }} 
          style={{ width: 25, height: 25 }} 
        />
        </View>
        <View style={{padding:8,backgroundColor:'white',borderRadius:5,borderColor:'#d2d9dc',borderWidth:1,}}>
        <Image 
          source={{ uri: imageUrl }} 
          style={{ width: 25, height: 25 }} 
        />
        </View>
        <View style={{padding:8,backgroundColor:'white',borderRadius:5,borderColor:'#d2d9dc',borderWidth:1,}}>
        <Image 
          source={{ uri: imageUrl }} 
          style={{ width: 25, height: 25 }} 
        />
        </View>
        </View>
        </View>
      )}
    </View>
  );
};

export default Product_Image;
