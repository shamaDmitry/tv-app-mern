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
import PersonPage from './Pages/PersonPage';
import EpisodePage from './Pages/EpisodePage';
import SearchPage from './Pages/SearchPage';

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
        <Route path="/shows/:id" element={<ShowPage />} />
        <Route path="/episode/:id" element={<EpisodePage />} />
        <Route path="/shows/:id/episode/:episodId" element={<EpisodePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<PersonPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>

      <Route path="*" element={<Page_404 />} />
    </>
  )
);

export default router;
