import { emailPattern } from './const';

export const emailRules = {
  required: 'User email is required.',
  pattern: {
    value: emailPattern,
    message: 'Must be a valid email according to RFC2822.',
  },
};

export const passwordRules = {
  required: 'Password is required',
  minLength: {
    message: 'Password should contain min 5 characters',
    value: 5,
  },
};

export const userNameRules = {
  required: 'Username is required',
  minLength: {
    message: 'Username should contain min 5 characters',
    value: 5,
  },
};
