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
import Page_404 from './Pages/Page_404';
import ShowsPage from './Pages/ShowsPage';
import ShowPage from './Pages/ShowPage';
import HomePage from './Pages/HomePage';
import PeoplePage from './Pages/PeoplePage';

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
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/show/:id" element={<ShowPage />} />
        <Route path="/people" element={<PeoplePage />} />
      </Route>

      <Route path="*" element={<Page_404 />} />
    </>
  )
);

export default router;
