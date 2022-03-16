import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, cardStyleInterpolator, CardStyleInterpolators } from '@react-navigation/stack';
import { Welcome, Login, Splash, Register } from '../screens/'


const Stack = createStackNavigator()

const navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Splash'
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator >
    )
}

export default navigation