import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import BasicLayout from './Layouts/BasicLayout';
import ProtectedRoute from './Layouts/ProtectedRoute';

import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import HomePage from './Pages/HomePage';
import Page_404 from './Pages/Page_404';

import { authLoader } from './loaders/authLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<BasicLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" loader={authLoader} element={<Login />} />
        <Route path="/register" loader={authLoader} element={<SignUp />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route index path="/home" element={<HomePage />} />
      </Route>

      <Route path="*" element={<Page_404 />} />
    </>
  )
);

export default router;
