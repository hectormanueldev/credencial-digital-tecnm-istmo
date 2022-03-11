import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { vigency } from '../helpers/GetVigencyCredential';

const CredentialBack = () => {
  return (
    <View style={styles.containerCredentialBack}>
      <View style={[styles.containerLogoEducacion, styles.mb30]}>
        <Image style={styles.logoEducacion} source={require('../assets/images/logo-educacion.png')} />
      </View>
      <View style={[styles.containerCampus, styles.mb30]}>
        <Image style={styles.logoIti} source={require('../assets/images/logo-iti.png')} />
        <Text style={styles.nameCampus}>Instituto Tecnológico del Istmo</Text>
      </View>
      <View>
        <Text style={styles.title}>Vigencia</Text>
        <Text style={styles.vigencia}>{vigency}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCredentialBack: {
    backgroundColor: '#1b396a',
    borderRadius: 8,
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('5%'),
    width: 350,
    maxWidth: wp('90%'),
    height: 520,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: wp('5%'),
  },
  containerLogoEducacion: {
    alignItems: 'center',
  },
  logoEducacion: {
    width: 220,
    height: 45,
  },
  containerCampus: {
    alignItems: 'center',
  },
  logoIti: {
    width: 80,
    height: 72,
    marginBottom: 10,
  },
  nameCampus: {
    color: '#ffffff',
    fontFamily: 'LatoBold',
    fontSize: hp('2.2%'),
    letterSpacing: 1,
    textAlign: 'center',
  },
  title: {
    color: '#ffffff80',
    fontFamily: 'LatoBold',
    fontSize: hp('2.2%'),
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 15,
  },
  vigencia: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('3.6%'),
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  mb30: {
    marginBottom: 30,
  },
});

export default CredentialBack;
