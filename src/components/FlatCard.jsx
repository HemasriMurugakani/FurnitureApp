import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const FlatCard = ({ title, description, imageUri, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <View style={{ justifyContent: 'center', bottom: 10 }}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.cardImage} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
  },
  cardImage: {
    marginLeft: 'auto',
    left:20,
    width: '50%',
    height: 110,
  },
  cardContent: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingVertical: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardDescription: {
    fontWeight: '700',
    fontSize: 14,
    color: '#eb7d34',
    marginTop: 5,
  },
});

export default FlatCard;
