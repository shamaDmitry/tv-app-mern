import { redirect } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';

export const authLoader = () => {
  const tokenStr = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
  const token = JSON.parse(tokenStr);

  return token ? redirect('/home') : null;
};
