import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WelcomeHome = ({ data }) => {
  return (
    <View style={styles.containerWelcome}>
      <Text style={[styles.textWelcome, styles.mb15]}>Credencial Digital del TecNM Campus Istmo</Text>
      <Text style={[styles.rolUser, styles.mb15]}>{data.jobTitle}</Text>
      <Text style={styles.nameUser}>{data.displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWelcome: {
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: wp('10%'),
  },
  textWelcome: {
    color: '#000000',
    fontFamily: 'LatoBold',
    fontSize: hp('3%'),
    textAlign: 'center',
    lineHeight: 30,
    letterSpacing: 1,
  },
  rolUser: {
    color: '#000000',
    fontFamily: 'LatoBlack',
    fontSize: hp('5%'),
    textAlign: 'center',
    letterSpacing: 1,
  },
  nameUser: {
    fontFamily: 'LatoBold',
    fontSize: hp('3%'),
    lineHeight: 30,
    textAlign: 'center',
    letterSpacing: 1,
  },
  mb15: {
    marginBottom: wp('15%'),
  },
});

export default WelcomeHome;
