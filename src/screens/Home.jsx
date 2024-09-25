import React from 'react';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/searchbar';
import Banner from '../components/banner';
import CategoryIcons from '../components/categoryicons';
import ProductCard from '../components/productcard';
import BottomNavigation from '../components/bottomnavigation';

const products = [
  { name: 'Small Living Table', brand: 'Walter Knoll', price: 750, image: 'https://example.com/table.jpg' },
  { name: 'Pole Brown Chair', brand: 'Rolf Benz', price: 1000, image: 'https://example.com/chair.jpg' },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar />
        <Banner />
        <CategoryIcons />
        <View style={styles.recommendedContainer}>
          <Text style={styles.recommendedText}>Recommended for you</Text>
          <View style={styles.productList}>
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  recommendedContainer: {
    paddingHorizontal: 10,
  },
  recommendedText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  productList: {
    flexDirection: 'row',
  },
});

export default HomeScreen;
