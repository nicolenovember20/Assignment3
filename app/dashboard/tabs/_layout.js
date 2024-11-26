import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DashboardLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: { backgroundColor: '#6200ee' }, headerShown: false }}>
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color="#ffffff" 
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="Profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'account' : 'account-outline'}
              size={24}
              color="#ffffff"
            />
          ),
        }}
      />
      <Tabs.Screen 
        name="Settings" 
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? 'cog' : 'cog-outline'}
              size={24}
              color="#ffffff"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
