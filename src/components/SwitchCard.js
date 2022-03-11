import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';

const SwitchCard = ({ isEnabled, toggleSwitch }) => {
  return (
    <View style={styles.containerSwitch}>
      <Switch
        trackColor={{ false: '#1b396a', true: '#1b396a' }}
        thumbColor={isEnabled ? '#f47b20' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerSwitch: {
    alignItems: 'center',
  },
});

export default SwitchCard;
