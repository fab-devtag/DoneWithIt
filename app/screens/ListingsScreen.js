import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import routes from '../navigation/routes';

import colors from '../config/colors';

import Screen from '../components/Screen';
import Card from '../components/Card';
import AppText from './../components/Text';
import Button from './../components/Button';
import ActivityIndicator from './../components/ActivityIndicator';

import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  /*   const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  ); */
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    /* loadListings(); */
    getListingsApi.request();
  }, []);

  return (
    <Screen style={styles.screen}>
      {getListingsApi.error && (
        <React.Fragment>
          <AppText>Couldn't retrieve the listings</AppText>
          <Button
            title="Retry"
            onPress={() => getListingsApi.request()}
          ></Button>
        </React.Fragment>
      )}
      <ActivityIndicator visible={getListingsApi.loading} />
      <FlatList
        data={getListingsApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            thumbnailUrl={item.images[0].thumbnailUrl}
            onPress={() => navigation.navigate(routes.LISTING_DEtAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
