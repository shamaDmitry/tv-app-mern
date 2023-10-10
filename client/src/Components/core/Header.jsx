import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/Logo';
import { v4 as uuidv4 } from 'uuid';
import { Menu } from '@headlessui/react';
import classNames from 'classnames';

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

  return (
    <header className="mb-5 bg-white">
      <div className="container">
        <div className="flex items-center h-20 gap-8 border-b border-teal-600">
          <Link className="block text-teal-600" to="/">
            <span className="sr-only">Home</span>
            <Logo />
          </Link>

          <div className="flex items-center justify-center flex-1 gap-4">
            <nav
              aria-label="Global"
              className="items-center hidden gap-6 text-lg md:flex"
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

          <div className="flex gap-4">
            <Menu className="relative" as="div">
              <Menu.Button className="flex items-center gap-x-1">
                <img
                  alt="Man"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="object-cover w-10 h-10"
                />

                <span className="text-sm font-bold capitalize text-dark-300">
                  username
                </span>
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

            <a href="#" className="block shrink-0">
              <span className="sr-only">Profile</span>
            </a>

            <button className="block bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
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
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
