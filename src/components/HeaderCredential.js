import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const HeaderCredential = () => {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.contentHeader}>
        <Text style={styles.textHeader}>Mi Credencial</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#1b396a',
  },
  contentHeader: {
    paddingVertical: 15,
  },
  textHeader: {
    color: '#ffffff',
    fontFamily: 'LatoBlack',
    fontSize: hp('3%'),
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export default HeaderCredential;
