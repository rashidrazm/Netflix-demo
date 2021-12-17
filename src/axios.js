import axios from 'axios'
import {baseUrl} from './constants/constants'
const instance = axios.create({
    baseURL: baseUrl,
  });
  //this is npm 'instance'

  export default instance