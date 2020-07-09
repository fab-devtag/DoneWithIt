import React from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';
import CategoryPickerItem from './../components/CategoryPickerItem';
import { Form, FormField, FormPicker, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(1000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.string().required().nullable().label('Category'),
});

const categories = [
  {
    value: 1,
    label: 'Boat',
    icon: 'seatbelt',
    backgroundColor: '#fc5c65',
  },
  {
    value: 2,
    label: 'Rhum',
    icon: 'food-fork-drink',
    backgroundColor: '#fd9644',
  },
  {
    value: 3,
    label: 'Weapons',
    icon: 'chemical-weapon',
    backgroundColor: '#fed330',
  },
  {
    value: 4,
    label: 'Cars',
    icon: 'car',
    backgroundColor: '#26de81',
  },
  {
    value: 5,
    label: 'Cameras',
    icon: 'camera',
    backgroundColor: '#2bcbba',
  },
  {
    value: 6,
    label: 'Games',
    icon: 'cards',
    backgroundColor: '#45aaf2',
  },
  {
    value: 7,
    label: 'Clothing',
    icon: 'shoe-heel',
    backgroundColor: '#4b7bec',
  },
  {
    value: 8,
    label: 'Sports',
    icon: 'basketball',
    backgroundColor: '#4ECDC4',
  },
  {
    value: 9,
    label: 'Music',
    icon: 'headphones',
    backgroundColor: '#0c0c0c',
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />
        <FormPicker
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          items={categories}
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
