import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import AppText from '../components/Text';

import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={listing.image}></Image>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}> {listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
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
