import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/home/searchbar';
import BottomNavigation from '../components/home/bottomnavigation';
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
              width: 55,
              height: 50,
            }}
          />
        </View>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          {data.discover.map((discover) => (
            <FlatCard 
              key={discover.name} 
              title={discover.name} 
              description={discover.collection}
              imageUri={discover.image} 
            />
          ))}
        </ScrollView>
        <View style={{ justifyContent: 'flex-end', height: 60 }}>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 20,
  },
});
