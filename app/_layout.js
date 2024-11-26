import React from 'react';
import { Stack } from 'expo-router';
import { PaperProvider, MD3LightTheme } from 'react-native-paper'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6200ee',  
    secondary: '#03dac4', 
    background: '#f5f5f5', 
    surface: '#ffffff', 
    text: '#000000', 
  }
};

const RootLayout = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Recovery" options={{ headerShown: false }} />
          <Stack.Screen name="Register" options={{ headerShown: false }} />
          <Stack.Screen name="dashboard" options={{ title: 'Dashboard', headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default RootLayout;
