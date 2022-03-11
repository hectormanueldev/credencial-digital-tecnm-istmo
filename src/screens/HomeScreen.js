import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';

import BannerHome from '../components/BannerHome';
import WelcomeHome from '../components/WelcomeHome';

const HomeScreen = ({ data }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <BannerHome />
      <WelcomeHome data={data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
