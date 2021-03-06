import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import * as Yup from 'yup';

import Screen from '../components/Screen';
import CategoryPickerItem from './../components/CategoryPickerItem';
import {
  Form,
  FormField,
  FormPicker,
  FormImagePicker,
  SubmitButton,
} from '../components/forms';

import listingsApi from '../api/listings';
import UploadScreen from './UploadScreen';

/* import useLocation from './../hooks/useLocation'; */

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(1000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.string().required().nullable().label('Category'),
  images: Yup.array().min(1, 'You should at least add 1 image'),
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
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  //Reseform came from FormikBag
  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const resutlt = await listingsApi.addListing({ ...listing }, (progress) =>
      setProgress(progress)
    );

    if (!resutlt.ok) {
      setUploadVisible(false);
      return alert('Coul not save the listing.');
    }

    resetForm();
  };

  /*   const location = useLocation(); */
  return (
    <Screen style={styles.container}>
      <UploadScreen
        onDone={() => setUploadVisible(false)}
        progress={progress}
        visible={uploadVisible}
      />
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          title: '',
          price: '',
          description: '',
          category: null,
          images: [],
        }}
        /*onSubmit={(values) => console.log(location)}*/
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
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
