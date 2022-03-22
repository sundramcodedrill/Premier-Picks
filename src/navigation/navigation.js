import React from 'react'
import { createStackNavigator, cardStyleInterpolator, CardStyleInterpolators } from '@react-navigation/stack';
import { Welcome, Splash, Register, RegisterTwo, Login } from '../screens'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
import { getFocusedRouteNameFromRoute, useRoute } from '@react-navigation/native';

const TabNavigator = (props) => {

    //console.log(props.route.screeName)
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#0B0B1F",
                    borderTopWidth: 0,
                    height: 50,
                },
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#4E21C9',
                tabBarInactiveTintColor: 'white',

            }}>
            {/*

{
                    tabBarIcon: () => (
                        <Feather name="users" size={20} />
                    ),
                    tabBarActiveTintColor: '#4E21C9',
                    tabBarInactiveTintColor: 'white',

                }
        */}

            <Tab.Screen name="My Groups"
                options={({ route }) => ({

                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        backgroundColor: "#0B0B1F",
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="users" color={color} size={size} />
                    ),

                })
                }
                component={Register} />
            <Tab.Screen name="Join Group"
                options={({ route }) => ({

                    tabBarStyle: {
                        // display: getTabBarVisibility(route),
                        backgroundColor: "#0B0B1F",
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user-plus" color={color} size={size} />
                    ),

                })
                }
                component={Splash} />
            <Tab.Screen name="Create"

                options={({ route }) => ({
                    tabBarStyle: {

                        // display: getTabBarVisibility(route),
                        backgroundColor: "#0B0B1F",
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="edit-3" color={color} size={size} />
                    ),


                })
                }
                component={Welcome} />
            <Tab.Screen name="Rules"
                options={({ route }) => (
                    {
                        tabBarStyle: {
                            // display: getTabBarVisibility(route),
                            backgroundColor: "#0B0B1F",
                        },
                        tabBarIcon: ({ color, size }) => (

                            <Feather name="book" color={color} size={size} />
                        ),
                    })
                }
                component={Login}
            />

        </Tab.Navigator >
    );
}


const navigation = (props) => {

    return (
        <Stack.Navigator
            initialRouteName='RegisterStep2'
            screenOptions={{
                headerShown: false
            }}>

            {/* <Stack.Screen name='Register' component={TabNavigator} />
            <Stack.Screen name='Login' component={Login} options={(route) => ({

            })} /> */}
            <Stack.Screen name='Splash' component={Splash} />
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='RegisterStep2' component={RegisterTwo} />

        </Stack.Navigator >
    )
}


export default navigation
export { TabNavigator as Tb }
