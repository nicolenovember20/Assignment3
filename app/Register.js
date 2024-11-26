import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Register = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <TextInput label="Name" mode="outlined" style={styles.input} />
      <TextInput label="Email" mode="outlined" style={styles.input} />
      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => console.log('User Registered')}
      >
        Sign Up
      </Button>
      <Button mode="text" onPress={() => router.replace('/')}>
        Already have an account? Login
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
    fontSize: 24,
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

export default Register;
