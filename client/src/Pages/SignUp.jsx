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
    <div className="container flex-1">
      <section>
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
            {location.state && (
              <div className="mb-3 text-center text-red-500">
                {location.state.message}
              </div>
            )}
            <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
              <div className="w-full px-6 py-3">
                <div>
                  <div className="mt-3 text-left sm:mt-5">
                    <div className="inline-flex items-center w-full">
                      <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">
                        Register
                      </h3>
                    </div>
                    <div className="mt-4 text-base text-gray-500">
                      <p>Register and get our newest shows.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 space-y-2">
                  <div>
                    <label htmlFor="name" className="sr-only">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="block w-full px-5 py-3 text-base placeholder-gray-400 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex flex-col mt-4 lg:space-y-2">
                    <button
                      type="button"
                      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white capitalize transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Register
                    </button>
                  </div>
                </div>
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
    </div>
  );
};

export default SignUp;
