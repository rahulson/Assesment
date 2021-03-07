import React from 'react'
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './NavigationService';
import { SCREEN_CONSTANTS } from '../constants/AppConstants'
import { Welcome, UserInfo, Variants } from '../screens'


const AppStack = createStackNavigator();

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    background: 'rgb(255, 255, 255)',
  },
};

const AppNavigator = () => {


    return (
        <NavigationContainer ref={navigationRef} theme={appTheme}>
            <AppStack.Navigator initialRouteName={SCREEN_CONSTANTS.WELCOME} headerMode="screen" screenOptions={{ headerTintColor: 'blue' }}>
                <AppStack.Screen name={SCREEN_CONSTANTS.WELCOME} component={Welcome} options={{ headerShown: false }}/>
                <AppStack.Screen name={SCREEN_CONSTANTS.USERINFO} component={UserInfo} />
                <AppStack.Screen name={SCREEN_CONSTANTS.VARIANTS} component={Variants} options={{gestureEnabled: false}}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;

