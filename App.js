import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import PasswordRecoveryPage from './PasswordRecoveryPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="RegistrationPage" component={RegistrationPage} />
        <Stack.Screen name="PasswordRecoveryPage" component={PasswordRecoveryPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;