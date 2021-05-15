import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from "../screens/Dashboard";
import SplashScreen from "../screens/Splash";
import AccountScreen from "../screens/CreateAccount";
import Calling from "../screens/Calling";
import { Icon } from "native-base";
import { colors } from "../shared";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const Navigations = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animationEnabled: false,
                }}
                initialRouteName="Splash">
                <Stack.Screen name="Dashboard" component={tabNavigation} />
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Calling" component={Calling} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const tabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // tabBarIcon: ({ focused, color, size }) => {
                //     let iconName;

                //     if (route.name === 'Contacts') {
                //         iconName = focused
                //             ? 'ios-information-circle'
                //             : 'ios-information-circle-outline';
                //     } else if (route.name === 'Settings') {
                //         iconName = focused ? 'ios-list-box' : 'ios-list';
                //     }

                //     // You can return any component that you like here!
                //     return <Icon name={iconName} size={size} color={color} />;
                // },
            })}
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: 'gray',
                allowFontScaling: false,
                labelStyle: {
                    fontSize: 15.5
                }
            }}>
            <Tab.Screen name="Contacts" component={DashboardScreen} />
            <Tab.Screen name="Keypad" component={DashboardScreen} />
            <Tab.Screen name="Accounts" component={AccountScreen} />
        </Tab.Navigator>
    )
}

export default Navigations;