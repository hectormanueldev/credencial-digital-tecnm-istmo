import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';

import HeaderAvisos from '../components/HeaderAvisos';
import { getAvisos } from '../api/ApiRequest';

const { width } = Dimensions.get('screen');

const AvisosScreen = () => {
  const [urlsAvisos, setUrlAvisos] = useState([]);

  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  let fecha = `${month + 1}-${year}`;
  let fechaAnt = `${month}-${year}`;

  useEffect(() => {
    getAvisos(fecha).then(datos => {
      let urlAviso = datos;
      if (!urlAviso) {
        getAvisos(fechaAnt).then(dat => {
          let urlAnterior = dat;
          let urlss = [];
          urlAnterior.map(val => urlss.push(val.url));
          setUrlAvisos(urlss);
        });
      } else {
        let urls = [];
        urlAviso.map(valor => urls.push(valor.url));
        setUrlAvisos(urls);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <HeaderAvisos />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          data={urlsAvisos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.containerAvisos}>
                <Image source={{ uri: item }} style={styles.imageAviso} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  containerAvisos: {
    width: width,
    height: 450,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 40,
  },
  imageAviso: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'contain',
  },
});

export default AvisosScreen;
