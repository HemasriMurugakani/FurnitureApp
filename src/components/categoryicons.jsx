import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

const categories = [
  { name: 'Tables', icon: 'table-bar' },
  { name: 'Beds', icon: 'bed' },
  { name: 'Chairs', icon: 'event-seat' },
  { name: 'Storage', icon: 'archive' },
  { name: 'Sofas', icon: 'weekend' },
];

const CategoryIcons = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.category}>
          {/* <MaterialIcons name={category.icon} size={24} color="black" /> */}
          <Text>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default CategoryIcons;
