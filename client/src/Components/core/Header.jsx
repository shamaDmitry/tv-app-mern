import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/Logo';
import { v4 as uuidv4 } from 'uuid';
import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import { useState } from 'react';
import Avatar from '../atoms/Avatar';
import SearchBar from './SearchBar';

const menuItems = [
  {
    id: uuidv4(),
    to: 'home',
    text: 'home',
  },
  {
    id: uuidv4(),
    to: 'shows',
    text: 'Shows',
  },
  {
    id: uuidv4(),
    to: 'people',
    text: 'people',
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [user] = useState(() => JSON.parse(localStorage.getItem('user')));
  const [countryCode] = useState(() => localStorage.getItem('countryCode'));

  return (
    <header className="mb-5 bg-white">
      <div className="container">
        <div className="flex flex-wrap items-center gap-4 pt-3 md:flex-nowrap md:gap-8 md:h-20">
          <Link className="block text-teal-600" to="/home">
            <span className="sr-only">Home</span>
            <Logo />
          </Link>

          <div className="items-center justify-center flex-1 hidden gap-4 md:flex">
            <nav
              aria-label="Global"
              className="flex items-center gap-6 text-lg "
            >
              {menuItems.map(item => {
                return (
                  <NavLink
                    key={item.id}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'capitalize underline'
                        : 'capitalize text-gray-500 transition hover:text-gray-500/75'
                    }
                  >
                    {item.text}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          <SearchBar className="order-last w-full md:w-auto md:order-none" />

          <div className="flex justify-end flex-1 gap-4">
            <Menu className="relative" as="div">
              <Menu.Button className="flex gap-x-2">
                {user.image ? (
                  <img
                    alt={user.username}
                    src={user.image}
                    className="object-cover w-10 h-10"
                  />
                ) : (
                  <Avatar name={user.username} />
                )}

                <div className="flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-900">
                    {user.username}
                  </span>

                  <span className="text-sm font-medium text-gray-500">
                    {user.email}
                  </span>

                  <span className="text-xs text-gray-400">{countryCode}</span>
                </div>
              </Menu.Button>

              <Menu.Items className="absolute right-0 flex flex-col justify-end mb-4 overflow-hidden bg-white border rounded top-full w-52">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        localStorage.clear();
                        navigate('/');
                      }}
                      className={classNames(
                        `font-bold text-primary-400 py-1 px-3 border-b last:border-b-0`,
                        {
                          'text-teal-600': active,
                        }
                      )}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

            <Menu className="relative" as="div">
              <Menu.Button className="self-center block bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Menu.Button>

              <Menu.Items className="absolute right-0 flex flex-col justify-end px-4 py-2 mb-4 space-y-1 overflow-hidden bg-white border rounded md:hidden top-full w-52">
                {menuItems.map(item => {
                  return (
                    <NavLink
                      key={item.id}
                      to={item.to}
                      className={({ isActive }) =>
                        isActive
                          ? 'capitalize underline'
                          : 'capitalize text-gray-500 transition hover:text-gray-500/75'
                      }
                    >
                      {item.text}
                    </NavLink>
                  );
                })}
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
