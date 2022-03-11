import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BannerHome = () => {
  return (
    <View style={styles.containerBanner}>
      <Image style={styles.imageBanner} source={require('../assets/images/logo-tecnm.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerBanner: {
    backgroundColor: '#1b396a',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    height: hp('30%'),
  },
  imageBanner: {
    width: 286,
    height: 122,
  },
});

export default BannerHome;
