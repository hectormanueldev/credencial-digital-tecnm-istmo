import React from 'react';
import { Alert, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RCTNetworking from 'react-native/Libraries/Network/RCTNetworking';

const ButtonSignOut = () => {
  const navigation = useNavigation();

  const signOut = () => {
    Alert.alert('Cerrar Sesión', '¿Estás seguro de que deseas cerrar tu sesión?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Aceptar',
        onPress: () => {
          RCTNetworking.clearCookies(() => {});
          navigation.navigate('SignIn');
        },
      },
    ]);
  };

  return (
    <View style={styles.containerButton}>
      <TouchableHighlight style={styles.buttonSignOut} onPress={signOut} activeOpacity={0.85} underlayColor='#f47b20'>
        <Text style={styles.textButton}>Cerrar Sesión</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonSignOut: {
    backgroundColor: '#ffffff',
    borderColor: '#f47b20',
    borderWidth: 2,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#000000',
    fontFamily: 'LatoBold',
    fontSize: hp('2.6%'),
    letterSpacing: 1,
  },
});

export default ButtonSignOut;
