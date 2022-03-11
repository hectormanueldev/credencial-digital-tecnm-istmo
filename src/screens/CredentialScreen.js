import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';

import HeaderCredential from '../components/HeaderCredential';
import CredentialFront from '../components/CredentialFront';
import CredentialBack from '../components/CredentialBack';
import SwitchCard from '../components/SwitchCard';

const CredentialScreen = ({ data }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle='light-content' backgroundColor='#1b396a' />
      <HeaderCredential />
      {isEnabled ? <CredentialBack /> : <CredentialFront data={data} />}
      <SwitchCard isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default CredentialScreen;
