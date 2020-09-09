import React, { useEffect, useState } from 'react';
import { Text, Button } from 'react-native';
import { AppLoading } from 'expo';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './app/components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';

import OfflineBar from './app/components/OfflineBar';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

import { navigationRef } from './app/navigation/rootNavigation';

import logger from './app/utility/logger';

logger.start();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineBar />
      <NavigationContainer ref={navigationRef} heme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
