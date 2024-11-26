import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => router.replace('/')}
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 20,
  },
  button: {
    width: 200,
    backgroundColor: '#6200ee',
  },
});

export default Settings;
