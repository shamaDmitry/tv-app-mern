import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';
import Footer from '../Components/core/Footer';
import Header from '../Components/core/Header';

const ProtectedRoute = () => {
  const location = useLocation();
  const tokenStr = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
  const token = JSON.parse(tokenStr);

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{
          message: 'You must log in first.',
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return (
    <main className="relative flex flex-col min-h-screen selection:bg-teal-600 selection:text-white">
      {/* <div className="container mb-4">
        <button
          className="px-3 py-1 border"

        >
          log out
        </button>
      </div> */}

      <Header />

      <Outlet />

      <Footer />
    </main>
  );
};

export default ProtectedRoute;
