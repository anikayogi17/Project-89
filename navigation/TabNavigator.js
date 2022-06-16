import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";
import createMaterialBottomTabNavigator from '@react-navigation/material-bottom-tabs react-native-paper'

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed'){
                        iconNasme = focused
                            ? 'book'
                            : 'book-outline';      
                    } else if (route.name === 'CreatPost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatPost} />
        </Tab.Navigator>    
    );

}

export default BottomTabNavigator