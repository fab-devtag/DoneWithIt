import React, { useState, useEffect } from 'react';
import {
  Image,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import Screen from './app/components/Screen';
/* import Button from './app/components/Button'; */
import Card from './app/components/Card';
import TextInput from './app/components/TextInput';
import Picker from './app/components/Picker';
import RegisterScreen from './app/screens/RegisterScreen';
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';
/* import styles from './app/config/styles'; */

export default function App() {
  return <ListingEditScreen />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
