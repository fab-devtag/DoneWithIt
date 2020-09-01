import React from 'react';
import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

function FormField({ name, width, ...otherProps }) {
  const {
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    values,
  } = useFormikContext();
  return (
    <React.Fragment>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default FormField;
