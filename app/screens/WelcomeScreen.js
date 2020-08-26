import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

import Button from '../components/Button';
import routes from '../navigation/routes';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          color="primary"
          title="login"
          onPress={() => navigation.navigate(routes.LOGIN)}
        />
        <Button
          color="secondary"
          title="register"
          onPress={() => navigation.navigate(routes.REGISTER)}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
  },
  tagLine: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  logo: {
    width: 100,
    height: 100,
  },
});

export default WelcomeScreen;
