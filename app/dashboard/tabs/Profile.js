import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Profile = () => {
  const avatarUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbbK2pa-B1UTy51qUBkmiDrvVpwxAlewARg&s'; 

  return (
    <View style={styles.container}>
      <Avatar.Image size={100} source={{ uri: avatarUrl }} style={styles.avatar} />
      <Text style={styles.username}>Nicole Panares</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Profile;
