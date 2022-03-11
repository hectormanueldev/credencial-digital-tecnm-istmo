import { launchImageLibraryAsync, requestCameraPermissionsAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker';
import { Alert } from 'react-native';

const loadImageFromGallery = async array => {
  const response = { status: false, image: null };
  const { status } = await requestMediaLibraryPermissionsAsync();

  if (status !== 'granted') {
    Alert.alert('Acepta los permisos necesarios');
    return response;
  }

  const result = await launchImageLibraryAsync({
    allowsEditing: true,
    aspect: array,
  });

  if (result.cancelled) {
    return response;
  }

  response.status = true;
  response.image = result.uri;
  return response;
};

const askForPermission = async () => {
  const { status } = await requestCameraPermissionsAsync();

  if (status !== 'granted' && status !== 'denied') {
    Alert.alert('No hay permisos para acceder a la cámara');
    return false;
  }

  return true;
};

export { loadImageFromGallery, askForPermission };
