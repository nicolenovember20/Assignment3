import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const backgroundImageUrl = 'https://img.freepik.com/free-vector/abstract-blur-pink-blue-gradient-background-design_53876-169254.jpg';

const Login = () => {
  const router = useRouter();

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text variant="headlineMedium" style={styles.loginText}>Login</Text>
        </View>
        <TextInput label="Phone number, username, or email" mode="outlined" style={styles.input} />
        <TextInput label="Password" mode="outlined" secureTextEntry style={styles.input} />
        <Button mode="contained" style={styles.button} onPress={() => router.replace('dashboard')}>Login</Button>
        <Button mode="text" onPress={() => router.push('Recovery')}>Forgot Password?</Button>
        <Button mode="text" onPress={() => router.push('Register')}>Sign Up</Button>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    fontWeight: 'bold',
    color: '#fff',  
  },
  input: {
    marginBottom: 16,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  button: {
    marginBottom: 16,
    width: 180,
    alignSelf: 'center',
    backgroundColor: '#6200ee',  
  },
});

export default Login;
