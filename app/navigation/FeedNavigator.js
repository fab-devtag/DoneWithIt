import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import ListingsScreen from './../screens/ListingsScreen';
import ListingDetailsScreen from './../screens/ListingDetailsScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={routes.FEED}
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LISTING_DEtAILS}
      component={ListingDetailsScreen}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
