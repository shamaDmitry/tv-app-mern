import { useForm } from 'react-hook-form';
import Input from '../Components/atoms/Input';
import {
  emailRules,
  passwordRules,
  userNameRules,
} from '../helpers/validationRules';
import { useState } from 'react';
import userApi from '../api/modules/user.api';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const { response, err } = await userApi.register(data);

    if (response) {
      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_NAME,
        JSON.stringify(response.token)
      );
      localStorage.setItem('user', JSON.stringify(response));
      navigate('/home');
    }
    if (err) {
      alert(JSON.stringify(err, null, 2));
    }
  };

  return (
    <section className="container flex-1">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
          {location.state && (
            <div className="mb-3 text-center text-red-500">
              {location.state.message}
            </div>
          )}
          <div className="grid justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
            <div className="w-full px-6 py-3">
              <div>
                <div className="mt-3 text-left sm:mt-5">
                  <div className="inline-flex items-center w-full">
                    <h3 className="text-3xl font-bold text-gray-700 eading-6 lg:text-5xl">
                      Register
                    </h3>
                  </div>
                  <div className="mt-4 text-base text-gray-500">
                    <p>Register and get our newest shows.</p>
                  </div>
                </div>
              </div>
              <form
                className="mt-6 space-y-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>

                  <Input
                    id="username"
                    placeholder="Username"
                    defaultValue=""
                    name="username"
                    required
                    {...register('username', userNameRules)}
                    error={errors.username}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    defaultValue=""
                    name="email"
                    required
                    {...register('email', emailRules)}
                    error={errors.email}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <Input
                    type="text"
                    id="password"
                    placeholder="Enter your password"
                    defaultValue=""
                    name="password"
                    required
                    {...register('password', passwordRules)}
                    error={errors.password}
                  />
                </div>

                <div className="flex flex-col mt-4 lg:space-y-2">
                  <button
                    // onClick={() => {
                    //   localStorage.setItem(
                    //     LOCAL_STORAGE_TOKEN_NAME,
                    //     JSON.stringify('test')
                    //   );

                    //   navigate('/home');
                    // }}
                    type="submit"
                    className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white capitalize transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    login
                  </button>
                </div>
              </form>
            </div>
            <div className="order-first hidden w-full h-full lg:block">
              <img
                className="object-cover h-full bg-cover rounded-l-lg"
                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
