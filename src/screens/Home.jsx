import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/home/searchbar';
import Banner from '../components/home/banner';
import ProductCard from '../components/home/productcard';
import BottomNavigation from '../components/home/bottomnavigation';
import RoundImageContainer from '../components/home/notificationicon';
import CartContainer from '../components/home/carticon';
import RoundIcon from '../components/home/roundicon';

const products = [
  { name: 'Small Living Table', brand: 'Walter Knoll', price: 750, description: "A compact and stylish living room table, perfect for modern homes. Crafted from high-quality wood", image: 'data:image/jpeg;base64,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' },
  { name: 'Pole Brown Chair', brand: 'Rolf Benz', price: 1000, description: "A comfortable and elegant chair with a modern design.", image: 'data:image/jpeg;base64,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' },
];

const imageData = [
  { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSso3UnUk-s9hmwHsAq4c5NlH_GosN1x2Jrvw&s", name: "Tables" },
  { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmdVmsWzEwb1WJI6sax_NN0wrqhAEHcTLXxA&s", name: "Beds" },
  { uri: "https://static.vecteezy.com/system/resources/thumbnails/000/512/440/small/194_-_3_-_Chair.jpg", name: "Chairs" },
  { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7y1_B25RHpy2yst1JXZYQPbZziWJrD3tCXQ&s", name: "Storage" },
  { uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAD4+Pg8PDzMzMzc3NyOjo719fW0tLRra2tFRUUkJCR/f3/Y2NilpaXR0dHt7e1xcXGenp7AwMAsLCxgYGB4eHgZGRlKSkoSEhJZWVkMDAw/Pz+oqKiurq41NTWWlpaJiYnm5uZSUlLFxcUeHh42obHnAAADWUlEQVR4nO3caVPiUBCFYRIDQUG2oERUCOj8/7840jdxyVIlY3eHmXmfTzNYlcNRsnDvTQYDAAAAAAAAAAAAAAAAAAAAAAAAAAAAfN9t4uW2j3rD5UPk52E59C5YONYLCt+C9+4Fo+jes+Csh4JRNPMrmPZSMIpSt4YrydvMhl5mG0lcuTXcS57n0W0oiXu3PImbusWdTCXTLU7SHPf7QXVsc4ujoQEaKqOhARoqo6EBGiqjoQEaKvtPGj67xZ08uzRMkywI3w/n1nmfzMP3wzI/sRnO2K3rwybRS2KSVJe8NJLXO/WU4b6RcnIfqyfVxe0jl3vlQZR5a8qbrXXFeNsVrbqXLLpS7Idrpt3RC8WYu+4Y3V9lQ+eH582dXsyw3GKy+GwcDj1LvZwWS8lYj78kJ+VvXG9XDNMwh/rL8aO8brknxpLw2Ig4yOuFWk5+2ty+2WQnOUe1nKajJDRPDbEc2nO1nMlpcy1TP7fmO2LYDVsmSOUUMlHLmXQcNHtsOKXheWhoh4ZaaGjnMhq+xqmV+PUiGtqjIQ1pSMNibKe4iIaWiz87Ezjjn4mGdmiohYZ2+m4YBvstp0rDxGjL8L1TwzBVulHLaQprg1t+4NUwTHzlVmPCRxmKbl2k79WwmjfZXluo5tXadnSvhi73XbTeZ+HWMH0yL/jUOmnv1nCQ5sYF8/ZVCX4Nq5svrHTdYuHZcDDIpvmNhXyadWb6NuwDDc9Ewx7Q8Ez/fsMrOfWqbU6DXGhcqW0urLwaq23v58aR7scqKa8vFvFlWJTXUYqLP6ull1eXoXw3mreUek1QnEd1sH3Xd5sWysuEx333aVA/8B2v+670xbXF2FCarUbvClld/hD+E8pPR4pk7GBSSJSM12wOHz9cZR7PHpCZvfKiIqyY0FyUHFbOlhcZMmi6tl8zXxMahtjMqOFN+Lec/dZ+j4wo0fCHaOiAhj9EQweO58M+Gz6+yiOARkYNf8nWw/Wif8OscamouvlRfesvqpv/jkX9gXS69z81vpH6PSPqXf2ZdMoX+7WvMhP3D+mguq2s0j2J8mfimy+bd3+ooBhP3t/A1uAdFJuPPaCPv6AYhkdTzlUPox/Kh2vOe+sHAAAAAAAAAAAAAAAAAAAAAAAAAADwd/oNdh9GZJ2wWRoAAAAASUVORK5CYII=", name: "Sofa" },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar />
        <View style={styles.imageContainer}> 
          <RoundImageContainer size={50} />
        </View>
        <View style={styles.cartContainer}>
          <CartContainer size={50} />
        </View>
        <Banner />
        <View style={styles.imagerow}>
          {imageData.map((item, index) => (
            <View style={styles.roundIconContainer} key={index}>
              <RoundIcon size={62} imageUri={item.uri} />
              <Text style={styles.imageName}>{item.name}</Text>
            </View>
          ))}
        </View>
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>Recommended for you</Text>
          <View style={styles.productList}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </View>
        </View>
      </ScrollView>
      {/* <BottomNavigation /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  recommendedContainer: {
    paddingHorizontal: 10,
  },
  recommendedText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft:13,
    marginTop:8,
    color:'black',
  },
  productList: {
    flexDirection: 'row',

  },
  imageContainer: {
    position: 'absolute', // Position the container absolutely
    top: 31, // Adjust as needed for vertical spacing
    right: 65, // Adjust as needed for horizontal spacing
  },
  cartContainer: {
    position: 'absolute', // Position the container absolutely
    top: 31, // Adjust as needed for vertical spacing
    right: 20, // Adjust as needed for horizontal spacing
  },
  imagerow: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'flex-start', // Align to the start to reduce space
    alignItems: 'center', // Center align vertically
    padding: 5, // Optional padding for the container
    marginLeft: 15,
  },
  roundIconContainer: {
    alignItems: 'center', // Center align the content of each round icon container
    // marginRight: 10, // Optional margin for spacing between icons
  },
  imageName: {
    marginTop: 2, // Space between the icon and the name
    textAlign: 'center', // Align the text to the left
    fontSize: 12, // Adjust font size as needed
    color: 'black',
    marginLeft:-13,
  },
});

export default HomeScreen;
