import React from 'react';
import { StyleSheet } from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from '../components/forms';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(1000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.string().required().nullable().label('Category'),
});

const categories = [
  {
    value: 1,
    label: 'Furniture',
  },
  {
    value: 2,
    label: 'Clothing',
  },
  {
    value: 3,
    label: 'Camera',
  },
];

function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          name="price"
          maxLength={8}
          placeholder="Price"
          keyboardType="numeric"
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
        />
        <AppFormField
          maxLength={255}
          multiline
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
