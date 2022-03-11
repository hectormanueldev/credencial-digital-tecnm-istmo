import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const HeaderSignIn = () => {
  return (
    <View style={styles.containerLogos}>
      <Image style={styles.logoTecnm} source={require('../assets/images/logo-tecnm-vertical.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerLogos: {
    alignItems: 'center',
  },
  logoTecnm: {
    width: 200,
    height: 290,
  },
});

export default HeaderSignIn;
