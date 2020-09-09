import React from 'react';
import { View, StyleSheet, Keyboard, Alert } from 'react-native';

import { Form, FormField, SubmitButton } from './../components/forms';

import messagesApi from '../api/messages';
import { Notifications } from 'expo';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  message: Yup.string().label('Message'),
});

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log('Error', result);
      return Alert.alert('Error', 'Could not send the message to the seller');
    }

    resetForm();

    Notifications.presentLocalNotificationAsync({
      title: 'Awesome',
      body: 'Your message was sent to the seller',
      data: {
        _displayInForeground: true,
      },
    });
  };
  return (
    <Form
      initialValues={{ message: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormField name="message" placeholder="Message..." />
      <SubmitButton title="Contact seller" />
    </Form>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
