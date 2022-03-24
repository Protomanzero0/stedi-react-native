import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Icons from './Icons.js';
import Bar  from './Bar.js';

const Home = (props) => {
  return (
    <View>
      <Bar name={props.userEmail}/>
      <Icons />
    </View>
  );
};

export default Home;
