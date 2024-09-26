import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const ProfilePage = () => {
  const user = {
    name: "Michael Leanon",
    email: "michaellean42@gmail.com",
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksG4mm4xFN-Ufeaf1ZZ8ixWe2k4aZknK1MQ&s"
  };
  const EditIcon = () => (
    <Svg width="16" height="16" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <Path d="M12.9 1.1a2 2 0 00-2.8 0l-8.1 8.1a1 1 0 00-.3.6v3.3c0 .6.4 1 1 1h3.3c.2 0 .5-.1.7-.3l8.1-8.1a2 2 0 000-2.8l-2.8-2.8zM9.8 3.7l2.5 2.5-1.4 1.4-2.5-2.5 1.4-1.4zM6 11.5l1.5-1.5 2.5 2.5H6v-1z" />
    </Svg>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
  <Text style={styles.profileTitle}>My Profile</Text>
  <View style={styles.profileImageContainer}>
    <Image source={{ uri: user.profilePicture }} style={styles.profileImage} />
    <TouchableOpacity style={styles.editIconContainer}>
      <EditIcon />
    </TouchableOpacity>
  </View>
  <Text style={styles.userName}>{user.name}</Text>
  <Text style={styles.userEmail}>{user.email}</Text>
</View>

      {/* Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Account</Text>
        <ProfileOption icon={<SettingsIcon />} text="Settings" iconBgColor="#E8F5E9" />
        <ProfileOption icon={<NotificationsIcon />} text="Notifications" iconBgColor="#E3F2FD" />
        <ProfileOption icon={<OrderHistoryIcon />} text="Order History" iconBgColor="#FFF3E0" />
      </View>

      {/* General Section */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>General</Text>
        <ProfileOption icon={<PrivacyIcon />} text="Privacy & Policy" iconBgColor="#EDE7F6" />
        <ProfileOption icon={<TermsIcon />} text="Terms & Conditions" iconBgColor="#FFF8E1" />
        <ProfileOption icon={<LogoutIcon />} text="Log Out" iconBgColor="#FFEBEE" />
      </View>
    </ScrollView>
  );
};

// SVG Icons
// SVG Icons
const SettingsIcon = () => (
  <Svg width="24" height="24" fill="#6A6A6A">
    <Path d="M12 2a10 10 0 11-0.001 20.001A10 10 0 0112 2zm-1 14h2v-2h-2v2zm0-4h2V7h-2v5z" />
  </Svg>
);

const NotificationsIcon = () => (
  <Svg width="24" height="24" fill="#6A6A6A">
    <Path d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6V10c0-3.31-2.69-6-6-6S6 6.69 6 10v6l-1.29 1.29c-.63.63-.94 1.5-.78 2.36.19 1.04 1.06 1.78 2.12 1.78h12c1.06 0 1.93-.74 2.12-1.78.16-.86-.15-1.73-.78-2.36L18 16zm-2 0H8v-6c0-2.21 1.79-4 4-4s4 1.79 4 4v6z" />
  </Svg>
);

const OrderHistoryIcon = () => (
  <Svg width="24" height="24" fill="#6A6A6A">
    <Path d="M9 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2zM9 1h6M9 3h6M4 10h16M4 14h16
" />
  </Svg>
);

const PrivacyIcon = () => (
  <Svg width="24" height="24" fill="#6A6A6A">
    <Path d="M12 2C8.69 2 6 4.69 6 8c0 2.65 2.35 6.07 5.38 9.62a1 1 0 0 0 1.24 0C15.65 14.07 18 10.65 18 8c0-3.31-2.69-6-6-6zm0 2c2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2.21 1.79-4 4-4zm0 14c-4.41 0-8-3.59-8-8H2c0 5.52 4.48 10 10 10s10-4.48 10-10h-2c0 4.41-3.59 8-8 8z" />
  </Svg>
);

const TermsIcon = () => (
  <Svg width="24" height="24" fill="#6A6A6A">
    <Path d="M10 2v4H4v14h16V6h-6V2h6c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h6z" />
  </Svg>
);

const LogoutIcon = () => (
  <Svg width="24" height="24" fill="#6A6A6A">
    <Path d="M19 13v-2h-5V9l-5 4 5 4v-2h5zM20 3H10a2 2 0 0 0-2 2v4h2V5h10v14H10v-4H8v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
  </Svg>
);

// Profile Option Component
const ProfileOption = ({ icon, text , iconBgColor  }) => (
  <TouchableOpacity style={styles.profileOption}>
    <View style={styles.optionContent}>
    <View style={[styles.iconContainer, { backgroundColor: iconBgColor }]}>
        {icon}
      </View>
      <Text style={styles.optionText}>{text}</Text>
    </View>
    <Svg width="24" height="24" fill="#BDBDBD">
      <Path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
    </Svg>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2, // Add this for the border width
    borderColor: 'orange', // Change this to set the border color
  },
  profileImageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 7,
    right: -5,
    backgroundColor: '#6A6A6A',
    borderRadius: 30,
    padding: 8,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 14,
    color: '#8E8E8E',
  },
  section: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A0A0A0',
    marginBottom: 5,
  },
  profileOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfilePage; 