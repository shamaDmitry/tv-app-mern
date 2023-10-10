// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Button from '../Components/atoms/Button';
// import Input from '../Components/atoms/Input';

import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';

// import User from '../assets/icons/user.svg?react';
// import Key from '../assets/icons/key.svg?react';
// import Logo from '../assets/logo.svg?react';
// import { emailRules, passwordRules } from '../helpers/validationRules';
// import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';
// import { useState } from 'react';
// import userApi from '../api/modules/user.api';
// import useUserStore from '../store/useUserStore';
// import Errors from '../Components/blocks/Errors';

const Login = () => {
  // const [setUser] = useUserStore(state => [state.setUser]);

  // const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const location = useLocation();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data, event) => {
  //   event.preventDefault();

  //   setIsLoading(true);
  //   setErrorMessage(undefined);

  //   const { response, err } = await userApi.signin(data);

  //   if (response) {
  //     setIsLoading(false);
  //     setUser(response);

  //     localStorage.setItem(
  //       LOCAL_STORAGE_TOKEN_NAME,
  //       JSON.stringify(response.token)
  //     );
  //     localStorage.setItem('user', JSON.stringify(response));

  //     navigate('/contracts');
  //   }

  //   if (err) {
  //     setIsLoading(false);
  //     setErrorMessage(err);
  //   }
  // };

  return (
    <div className="container flex-1">
      {location.state && (
        <div className="mb-3 text-red-500">{location.state.message}</div>
      )}

      <p>Login</p>

      <button
        className="px-3 py-1 border"
        onClick={() => {
          localStorage.setItem(
            LOCAL_STORAGE_TOKEN_NAME,
            JSON.stringify('test')
          );

          navigate('/home');
        }}
      >
        login
      </button>
      {/* <Logo className="max-w-[200px] mb-20" />

      {location.state && (
        <div className="mb-3 text-red-500">{location.state.message}</div>
      )}

      {errorMessage && <Errors data={errorMessage} />}

      <form className="w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          placeholder="Email"
          defaultValue="test@test.com"
          icon={<User />}
          name="email"
          required
          {...register('email', emailRules)}
          error={errors.email}
        />

        <Input
          placeholder="Password"
          icon={<Key />}
          defaultValue="test1"
          name="password"
          required
          {...register('password', passwordRules)}
          error={errors.password}
        />

        <Button className="w-full mb-4" type="submit" disabled={isLoading}>
          Login
        </Button>
      </form>

      <Button as="Link" to="/settings" color="outline" className="w-full mb-2">
        Settings
      </Button>

      <Link to="/register" className="py-2 text-sm uppercase text-primary-400">
        register
      </Link> */}
    </div>
  );
};

export default Login;
