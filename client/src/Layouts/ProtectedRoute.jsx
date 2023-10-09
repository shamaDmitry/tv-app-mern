import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { LOCAL_STORAGE_TOKEN_NAME } from '../../config';

const ProtectedRoute = () => {
  const navigate = useNavigate();

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
    <main className="relative flex flex-col min-h-screen">
      <div className="container mb-4">
        <button
          className="px-3 py-1 border"
          onClick={() => {
            localStorage.clear();
            navigate('/');
          }}
        >
          log out
        </button>
      </div>

      <Outlet />
    </main>
  );
};

export default ProtectedRoute;
