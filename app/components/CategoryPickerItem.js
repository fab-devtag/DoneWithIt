import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({ onPress, item }) {
  return (
    <View style={styles.container} onPress={onPress}>
      <Icon size={80} backgroundColor={item.backgroundColor} name={item.icon} />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
  },
});

export default CategoryPickerItem;
