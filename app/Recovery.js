import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Recovery = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trouble logging in?</Text>
      <TextInput
        label="Phone number, username, or email"
        mode="outlined"
        style={styles.input}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log('Recovery link sent')}
      >
        Send Recovery Link
      </Button>
      <Button mode="text" onPress={() => router.replace('/')}>
        Back to Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6200ee',
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6200ee',
    marginBottom: 16,
  },
});

export default Recovery;
