import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/searchbar';
import FlatCard from '../components/FlatCard'; 
import data from '../data/data.json'; 

export default function DiscoverScreen() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SearchBar width={310} />
          <View
            style={{
              backgroundColor: '#f0f0f0',
              borderRadius: 25,
              padding: 13,
              width: 55,
              height: 50,
            }}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {data.categories.map((category) => (
            <FlatCard key={category.name} category={category} />
          ))}
        </ScrollView>
        <View style={{ justifyContent: 'flex-end', height: 60 }}>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContent: {
    paddingBottom: 20,
  },
});
