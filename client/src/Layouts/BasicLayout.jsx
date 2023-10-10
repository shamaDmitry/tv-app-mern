import { Link, Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <div className="container">
        <div className="flex justify-end gap-4 py-4">
          <Link
            className="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            to="/login"
          >
            Login
          </Link>

          <Link
            className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>

      <Outlet />
    </main>
  );
};

export default BasicLayout;
