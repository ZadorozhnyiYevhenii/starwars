import axios from "axios";

export const BASE_URL = 'https://sw-api.starnavi.io/';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})