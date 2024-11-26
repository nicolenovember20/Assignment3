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
  },
};

const DashboardLayout = () => {
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="tabs/_layout" options={{ headerShown: false }} />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default DashboardLayout;
