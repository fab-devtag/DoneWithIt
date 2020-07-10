import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import Icon from './Icon';

function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon size={80} backgroundColor={item.backgroundColor} name={item.icon} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
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
