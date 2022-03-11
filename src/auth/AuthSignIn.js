import React, { useState } from 'react';
import { AzureInstance, AzureLoginView } from 'expo-react-native-azure-ad-2';
import { useNavigation } from '@react-navigation/native';

import UrlApi from '../api/UrlApi';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import { getFoto } from '../api/ApiRequest';

const AuthSignIn = () => {
  const navigation = useNavigation();
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [data, setData] = useState({
    officeLocation: '',
    displayName: '',
    givenName: '',
    surname: '',
    jobTitle: '',
    mail: '',
  });

  const credentials = {
    client_id: UrlApi.CLIENT_ID,
    client_secret: UrlApi.CLIENT_SECRET_KEY,
    redirect_uri: 'http://localhost:3000',
    scope: 'User.Read User.ReadBasic.All User.Read.All Mail.Read offline_access',
  };

  const azureInstance = new AzureInstance(credentials);

  const onLoginSuccess = async () => {
    try {
      const result = await azureInstance.getUserInfo();
      setLoginSuccess(true);
      setData({
        officeLocation: result.officeLocation,
        displayName: result.displayName,
        givenName: result.givenName,
        surname: result.surname,
        jobTitle: result.jobTitle,
        mail: result.mail,
      });

      let cont = result.mail.slice(0, 8);
      getFoto(cont).then(datos => {
        let ase = datos;
        if (ase) {
          redirectBotton(result.displayName, result.jobTitle, result.mail, ase);
        } else {
          redirectUpload(result.officeLocation, result.givenName, result.surname, result.displayName, result.jobTitle, result.mail);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };
  const redirectBotton = (name, job, email, foto) => {
    navigation.replace('BottomNavigation', {
      displayName: name,
      jobTitle: job,
      mail: email,
      photo: foto,
    });
  };

  const redirectUpload = (curp, nombres, apellidos, name, job, email) => {
    navigation.replace('UploadPhoto', {
      officeLocation: curp,
      givenName: nombres,
      surname: apellidos,
      displayName: name,
      jobTitle: job,
      mail: email,
    });
  };

  if (!loginSuccess) {
    return <AzureLoginView azureInstance={azureInstance} loadingMessage={<AuthLoadingScreen />} onSuccess={onLoginSuccess} />;
  }

  return <AuthLoadingScreen data={data} />;
};

export default AuthSignIn;
