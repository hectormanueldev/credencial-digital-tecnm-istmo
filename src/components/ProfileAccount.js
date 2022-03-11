import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ProfileAccount = ({ data }) => {
  return (
    <ScrollView style={styles.containerContent}>
      <View style={styles.photoProfile}>
        <Avatar rounded size={160} source={{ uri: data.photo }} />
      </View>
      <View>
        <Text style={styles.title}>Nombre Completo</Text>
        <Text style={[styles.subtitle, styles.mb5]}>{data.displayName}</Text>
      </View>
      <View>
        <Text style={styles.title}>Correo Electrónico</Text>
        <Text style={styles.subtitle}>{data.mail}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerContent: {
    backgroundColor: '#1b396a',
    borderRadius: 8,
    width: wp('90%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: wp('5%'),
    marginBottom: wp('10%'),
    padding: wp('5%'),
  },
  photoProfile: {
    alignItems: 'center',
    marginBottom: wp('10%'),
  },
  title: {
    color: '#f47b20',
    fontFamily: 'LatoBold',
    fontSize: hp('2.6%'),
    marginBottom: 5,
    letterSpacing: 1,
  },
  subtitle: {
    color: '#ffffff',
    fontFamily: 'LatoRegular',
    fontSize: hp('2.4%'),
    letterSpacing: 0.5,
  },
  mb5: {
    marginBottom: wp('5%'),
  },
});

export default ProfileAccount;
