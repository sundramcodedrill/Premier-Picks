import { Login, Register } from '../screens/'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TabLogin" component={Login} />
            <Tab.Screen name="TabRegister" component={Register} />
        </Tab.Navigator>
    )
}

export default BottomNavigation