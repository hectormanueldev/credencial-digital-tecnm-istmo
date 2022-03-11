import axios from 'axios';
import UrlApi from './UrlApi';

export default axios.create({
  baseURL: `${UrlApi.API}/`,
});
