import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import colors from '../config/colors';

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          {subTitle}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    overflow: 'hidden',
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
