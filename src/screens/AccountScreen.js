import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';

import HeaderAccount from '../components/HeaderAccount';
import ProfileAccount from '../components/ProfileAccount';
import ButtonSignOut from '../components/ButtonSignOut';

const AccountScreen = ({ data }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <HeaderAccount />
      <ProfileAccount data={data} />
      <ButtonSignOut />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default AccountScreen;
