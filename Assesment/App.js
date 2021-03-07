/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from './source/navigation/AppNavigator'
import FlashMessage from "react-native-flash-message";
import UserProvider from './source/provider/UserProvider'

const App = () => {
  return (
    <UserProvider>
      <AppNavigator />
      <FlashMessage position="top" animated={true} />
    </UserProvider>
  )
}



export default App;
