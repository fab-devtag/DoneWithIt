import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';

export default function App() {
  return <ListingsScreen />;
}
