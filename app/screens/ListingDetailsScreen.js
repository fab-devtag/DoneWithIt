import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import AppText from '../components/Text';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/jacket.jpg')}
      ></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require('../assets/jack-sparrow.jpg')}
          title="Jack Sparrow"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title: {
    fontWeight: '500',
    fontSize: 24,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    color: colors.secondary,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
