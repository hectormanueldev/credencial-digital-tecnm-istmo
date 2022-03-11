import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ButtonSignIn = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textHelp}>Ingrese usando su cuenta institucional:</Text>
      <TouchableHighlight
        onPress={() => navigation.replace('AuthSignIn')}
        style={styles.buttonMicrosoft}
        activeOpacity={0.85}
        underlayColor='#ffffff10'
      >
        <Image style={styles.imageMicrosoft} source={require('../assets/images/logo-microsoft.png')} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  textHelp: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'LatoBold',
    fontSize: hp('2.2%'),
    letterSpacing: 0.5,
    marginBottom: 20,
  },
  buttonMicrosoft: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 50,
  },
  imageMicrosoft: {
    width: 120,
    height: 25,
  },
});

export default ButtonSignIn;
