import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigaotr from "./TabNavigator";
import PostScreen fron "../screens/PostScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <StackNavigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="PostScreen" component={PostScreen} />
        </StackNavigator>
    );
};