import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/home/searchbar';
import BottomNavigation from '../components/home/bottomnavigation';
import FlatCard from '../components/FlatCard'; 
import data from '../data/data.json'; 
import {Svg,Path} from 'react-native-svg' ;
import ShareIcon from '../assets/icons/Share'; 
import Settings from '../assets/icons/Settings'
export default function DiscoverScreen() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20, paddingHorizontal: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SearchBar width={310} />
          <View/>
          <View style={{backgroundColor:"#f5f5f5",paddingVertical:14,paddingHorizontal:13,borderRadius:20}}>
          <Settings/>
          </View>
         
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