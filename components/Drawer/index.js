import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

// Sample screens for the Drawer
const HomeScreen = ({ navigation }) => (
  <View>
    <Text>Home Screen</Text>
    <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile Screen</Text>
  </View>
);

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={24} color="black" />
            ),
          }} 
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons name={focused ? 'account' : 'account-outline'} size={24} color="black" />
            ),
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MyDrawer;
