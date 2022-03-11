import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CredentialFront = ({ data }) => {
  return (
    <View style={styles.containerCredentialFront}>
      <View style={styles.containerLogo}>
        <Image style={styles.logoTecNM} source={require('../assets/images/logo-tecnm.png')} />
      </View>
      <View style={styles.containerProfile}>
        <Image style={styles.photo} source={{ uri: data.photo }} />
      </View>
      <View>
        <Text style={styles.name}>{data.displayName}</Text>
        <Text style={styles.title}>Número de Control</Text>
        <Text style={styles.subtitle}>{data.mail.slice(0, 8)}</Text>
        <Text style={styles.rolUser}>{data.jobTitle.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCredentialFront: {
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
  containerLogo: {
    alignItems: 'center',
    marginBottom: 15,
  },
  logoTecNM: {
    width: 200,
    height: 85,
  },
  containerProfile: {
    alignItems: 'center',
    marginBottom: 5,
  },
  photo: {
    width: 130,
    height: 150,
  },
  name: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('3%'),
    textAlign: 'center',
    letterSpacing: 1,
    lineHeight: 30,
    marginBottom: 20,
  },
  title: {
    color: '#ffffff80',
    fontFamily: 'LatoBold',
    fontSize: hp('2.2%'),
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'LatoRegular',
    fontSize: hp('2.2%'),
    textAlign: 'center',
    marginBottom: 20,
  },
  rolUser: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('3.6%'),
    textAlign: 'center',
    letterSpacing: 1,
  },
});

export default CredentialFront;
