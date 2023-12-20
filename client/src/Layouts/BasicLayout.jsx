import { Link, Outlet, NavLink } from 'react-router-dom';

const menu = [
  {
    id: 1,
    label: 'login',
    to: 'login',
  },
  {
    id: 2,
    label: 'register',
    to: 'register',
  },
];

const BasicLayout = () => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <div className="container">
        <div className="flex justify-end gap-4 py-4">
          {menu.map(menuItem => (
            <NavLink
              key={menuItem.id}
              to={menuItem.to}
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  'capitalize block rounded-md  px-5 py-2.5 text-sm font-medium transition',
                  isActive
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-blue-600 hover:bg-blue-700 hover:text-white',
                ].join(' ')
              }
            >
              {menuItem.label}
            </NavLink>
          ))}
        </div>
      </div>

      <Outlet />
    </main>
  );
};

export default BasicLayout;
