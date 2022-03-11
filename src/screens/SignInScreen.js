import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HeaderSignIn from '../components/HeaderSignIn';
import ButtonSignIn from '../components/ButtonSignIn';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <View style={styles.containerContent}>
        <HeaderSignIn />
        <ButtonSignIn navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b396a',
  },
  containerContent: {
    width: wp('90%'),
    height: hp('100%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: wp('30%'),
    paddingBottom: wp('10%'),
  },
});

export default SignInScreen;
