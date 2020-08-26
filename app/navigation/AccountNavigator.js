import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MessagesScreen from './../screens/MessagesScreen';
import AccountScreen from './../screens/AccountScreen';

import routes from '../navigation/routes';

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.ACCOUNT}
      component={AccountScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
