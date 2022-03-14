import { Splash, Welcome } from './src/screens/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Navigation } from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Splash /> */}
      <Navigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})




