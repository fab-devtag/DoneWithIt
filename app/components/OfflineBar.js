import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import colors from '../config/colors';

import Constants from 'expo-constants';

import { useNetInfo } from '@react-native-community/netinfo';

function OfflineBar(props) {
  const netInfo = useNetInfo();
  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: colors.primary,
    marginTop: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineBar;
