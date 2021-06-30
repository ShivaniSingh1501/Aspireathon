import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './component/home/home'
import ProfileScreen from './component/home/Screen1'
import Home from './component/assets/logo/;'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
console.log(STATUSBAR_HEIGHT)

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

{/*
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
     </HomeStack.Navigator>
);



const TabsScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="white"
    inactiveColor='white'
    shifting={true}
    labeled={false}
    barStyle={{ backgroundColor: '#171B35' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ focused, color }) => (
          focused ?
            <HomeFocused width={100} height={30} />
            :
            <Home width={24} height={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={SearchStackScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ focused, color }) => (
          focused ?
            <SearchFocused width={100} height={30} />
            :
            <Search width={24} height={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ focused, color }) => (
          focused ?
            <AccountFocused width={100} height={30} />
            :
            <Account width={24} height={24} />
        ),
      }}
    />
  </Tab.Navigator>
);
    */}
