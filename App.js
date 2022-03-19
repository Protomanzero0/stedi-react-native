import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counter from './Counter.js';
import SettingsScreen from './SettingsScreen.js';
import Home from './Home.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Login from './Login.js';

// import Icons from "./Icons";
const Tab = createMaterialBottomTabNavigator();

export default function App() {

  // sends 'false' to useState, creates userLoggedIn and adds setUserLoggedIn method
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const[email, setUserEmail] = useState(false);

  
  //rerenders when userLoggedIn true
  if(userLoggedIn){

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        activeColor='white'
        barStyle={{ backgroundColor: 'green' }}
      >
        {/* <Tab.Screen
          name = 'Login'
          component={Login}
        /> */}
        <Tab.Screen
          name='Home'
          children = {() => <Home setUserEmail={setUserEmail}/>}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='home' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Step Counter'
          component={Counter}
          options={{
            tabBarLabel: 'Step Counter',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='watch' color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <FontAwesome name='gear' color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );


} else {
  return (<Login setUserLoggedIn = {setUserLoggedIn}/>)   
}
}

const styles = StyleSheet.create({
  
});
