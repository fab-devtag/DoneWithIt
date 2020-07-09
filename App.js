import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  Switch,
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';

import Screen from './app/components/Screen';
import AppButton from './app/components/AppButton';
import AppCard from './app/components/AppCard';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return <ListingEditScreen />;
}
