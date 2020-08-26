import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={35}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 6,
    borderRadius: 30,
    bottom: 20,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
});

export default NewListingButton;
