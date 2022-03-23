import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Navigation } from "./src/navigation/index"
import { createStackNavigator, cardStyleInterpolator, CardStyleInterpolators } from '@react-navigation/stack';

const App = () => {

  return (

    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})




