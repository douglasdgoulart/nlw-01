import axios from 'axios';
import Constants from "expo-constants";

const { manifest } = Constants;

const api_host = manifest.debuggerHost
  ? manifest.debuggerHost.split(`:`).shift()
  : `localhost`;

const api = axios.create({
    baseURL: `http://${api_host}:3333`
});

export default api;