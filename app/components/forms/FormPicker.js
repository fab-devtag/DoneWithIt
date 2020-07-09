import React from 'react';
import { useFormikContext } from 'formik';

import Picker from '../Picker';
import ErrorMessage from './ErrorMessage';

function FromPicker({
  items,
  name,
  placeholder,
  PickerItemComponent,
  width,
  numberOfColumns,
}) {
  const { errors, setFieldValue, values, touched } = useFormikContext();

  return (
    <React.Fragment>
      <Picker
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default FromPicker;
