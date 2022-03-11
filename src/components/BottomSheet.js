import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const ButtonCamera = () => {
  return (
    <View style={styles.containerButton}>
      <FontAwesome5 name='camera' size={24} color='#ffffff' />
      <Text style={styles.text}>Tomar Foto</Text>
    </View>
  );
};

const ButtonGallery = () => {
  return (
    <View style={styles.containerButton}>
      <MaterialIcons name='photo-library' size={24} color='#ffffff' />
      <Text style={styles.text}>Subir Foto</Text>
    </View>
  );
};

const ButtonCancel = () => {
  return (
    <View style={styles.containerButton}>
      <MaterialIcons name='cancel' size={24} color='#ffffff' />
      <Text style={styles.text}>Cancelar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'LatoRegular',
    fontSize: hp('2.4%'),
    marginLeft: 10,
  },
});

export { ButtonCamera, ButtonGallery, ButtonCancel };
