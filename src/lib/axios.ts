import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_URL
export const instance = axios.create({
    baseURL: URL,
  });