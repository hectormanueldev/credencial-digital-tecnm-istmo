import React from 'react';
import { useFonts } from 'expo-font';
import { ToastProvider } from 'react-native-toast-notifications';
import * as Sentry from 'sentry-expo';

import MainStack from './src/navigation/MainStack';

Sentry.init({
  dsn: 'https://5864092441df4f44b02697cce2e3ad0f@o562863.ingest.sentry.io/6214082',
  enableInExpoDevelopment: true,
  debug: true,
});

const App = () => {
  const [loaded] = useFonts({
    LatoRegular: require('./src/assets/fonts/LatoRegular.ttf'),
    LatoBold: require('./src/assets/fonts/LatoBold.ttf'),
    LatoBlack: require('./src/assets/fonts/LatoBlack.ttf'),
  });

  if (!loaded) return null;

  return (
    <ToastProvider>
      <MainStack />
    </ToastProvider>
  );
};

export default App;
