import React from 'react';
import { ActivityIndicator, StatusBar, StyleSheet, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AuthLoadingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <View style={styles.containerActivity}>
        <ActivityIndicator size='large' color='#ffffff' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b396a',
    justifyContent: 'center',
  },
  containerActivity: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;
