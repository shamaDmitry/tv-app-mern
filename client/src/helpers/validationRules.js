import { emailPattern } from './const';

export const emailRules = {
  required: 'User email, must be a valid email according to RFC2822',
  minLength: {
    message: 'Email should contain min 2 characters',
    value: 2,
  },
  maxLength: {
    message: 'Email should contain max 100 characters',
    value: 100,
  },
  pattern: {
    value: emailPattern,
    message: 'Must be a valid email according to RFC2822',
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
    value: 3,
  },
};
