import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Outlet />
    </main>
  );
};

export default BasicLayout;
