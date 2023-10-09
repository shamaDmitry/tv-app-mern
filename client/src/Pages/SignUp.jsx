// import { Link, useNavigate } from 'react-router-dom';
// import Logo from '../assets/logo.svg?react';
// import Button from '../Components/atoms/Button';
// import Input from '../Components/atoms/Input';

// import User from '../assets/icons/user.svg?react';
// import Key from '../assets/icons/key.svg?react';

// import { useForm } from 'react-hook-form';
// import {
//   emailRules,
//   passwordRules,
//   userNameRules,
// } from '../helpers/validationRules';
// import userApi from '../api/modules/user.api';
// import Errors from '../Components/blocks/Errors';
// import { useState } from 'react';
// import useUserStore from '../store/useUserStore';
// import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';

const SignUp = () => {
  // const [setUser] = useUserStore(state => [state.setUser]);
  // const [errorMessage, setErrorMessage] = useState(undefined);
  // const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = async (data, event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setErrorMessage(undefined);

  //   const { response, err } = await userApi.signup(data);

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
    <div className="flex flex-col items-center self-center flex-1 w-full p-4 px-4 py-10 SignUp">
      SignUp
      {/* <Logo className="max-w-[200px] mb-20" />

      {errorMessage && <Errors data={errorMessage} />}

      <form className="w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          placeholder="Username"
          icon={<User />}
          name="username"
          required
          {...register('username', userNameRules)}
          error={errors.username}
        />

        <Input
          placeholder="Email"
          icon={<User />}
          name="email"
          required
          {...register('email', emailRules)}
          error={errors.email}
        />

        <Input
          placeholder="Password"
          icon={<Key />}
          name="password"
          required
          {...register('password', passwordRules)}
          error={errors.password}
        />

        <Button className="w-full mb-4" type="submit" disabled={isLoading}>
          register
        </Button>
      </form>

      <Button as="Link" to="/settings" color="outline" className="w-full mb-2">
        Settings
      </Button>

      <Link to="/login" className="py-2 text-sm uppercase text-primary-400">
        login
      </Link> */}
    </div>
  );
};

export default SignUp;
