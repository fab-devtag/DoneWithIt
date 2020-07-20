import React from 'react';
import { StyleSheet } from 'react-native';

import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';

import { useFormikContext } from 'formik';

function FormImagePicker({ name }) {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <React.Fragment>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImagePicker;
