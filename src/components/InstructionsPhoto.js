import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InstructionsPhoto = () => {
  return (
    <View style={styles.containerInstructions}>
      <Text style={styles.title}>Instrucciones:</Text>
      <Text style={[styles.subtitle, styles.mb20]}>1.- Sube una fotografía de buena calidad con fondo claro.</Text>
      <Text style={[styles.subtitle, styles.mb20]}>2.- Debe mostrar solo tu rostro, tomada de frente.</Text>
      <Text style={[styles.subtitle, styles.mb20]}>3.- A color, reciente y bien enfocada.</Text>
      <Text style={[styles.subtitle, styles.mb40]}>
        4.- Recuerda que una vez subida tu foto no podrás cambiarla, y esta será usada para generar tu credencial de estudiante.
      </Text>
      <View style={styles.containerPhoto}>
        <Image style={styles.photoProfile} source={require('../assets/images/photo-profile.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInstructions: {
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: wp('5%'),
    marginBottom: 50,
  },
  title: {
    fontFamily: 'LatoBold',
    fontSize: hp('3.4%'),
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'LatoRegular',
    fontSize: hp('2.4%'),
    letterSpacing: 0.5,
  },
  containerPhoto: {
    alignItems: 'center',
  },
  photoProfile: {
    width: 130,
    height: 150,
  },
  mb20: {
    marginBottom: 20,
  },
  mb40: {
    marginBottom: 40,
  },
});

export default InstructionsPhoto;
