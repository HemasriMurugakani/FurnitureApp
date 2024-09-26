import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksG4mm4xFN-Ufeaf1ZZ8ixWe2k4aZknK1MQ&s" // Replace with your image URL
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userEmail}>{user.email}</Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Profile Details</Text>
        <Text style={styles.detailText}>Phone: {user.phone}</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.settingsContainer}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            {/* <Svg width="24" height="24" fill="#D97B3A">
              <Path d="M12 1C6.48 1 2 5.48 2 11c0 4.41 3.58 8 8 8s8-3.59 8-8c0-5.52-4.48-10-10-10zm0 18c-5.52 0-10-4.48-10-10S6.48 3 12 3s10 4.48 10 10-4.48 10-10 10z" />
            </Svg> */}
            <Text style={styles.settingText}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            <Svg width="24" height="24" fill="#D97B3A">
              <Path d="M12 1C6.48 1 2 5.48 2 11c0 4.41 3.58 8 8 8s8-3.59 8-8c0-5.52-4.48-10-10-10zm0 18c-5.52 0-10-4.48-10-10S6.48 3 12 3s10 4.48 10 10-4.48 10-10 10z" />
            </Svg>
            <Text style={styles.settingText}>Privacy Policy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <View style={styles.settingItemContent}>
            <Svg width="24" height="24" fill="#D97B3A">
              <Path d="M12 1C6.48 1 2 5.48 2 11c0 4.41 3.58 8 8 8s8-3.59 8-8c0-5.52-4.48-10-10-10zm0 18c-5.52 0-10-4.48-10-10S6.48 3 12 3s10 4.48 10 10-4.48 10-10 10z" />
            </Svg>
            <Text style={styles.settingText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#D97B3A',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#D97B3A',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#D97B3A',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  settingsContainer: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
  },
  settingItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#dddddd',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfilePage;
